import { Request, Response, NextFunction } from 'express';
import HttpException from '../httpException';

class ErrorMiddleware {
  static handleError(
    error: unknown,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ) {
    const { status, message } = error as HttpException;
    res.status(status || 500).json({ message });
  }
}

export default ErrorMiddleware;
