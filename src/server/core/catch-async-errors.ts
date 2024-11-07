import { Request, RequestHandler, Response, NextFunction } from 'express';
/**
 * catchAsyncErrors catches rejections returned by a controller (eg
 * async controllers) and invokes next(err).
 */
export default function catchAsyncErrors(handler: {
  (req: Request, res: Response, next: NextFunction): Promise<void>;
}): RequestHandler {
  return (req, res, next) => {
    const routePromise = handler(req, res, next);
    if (routePromise && routePromise.catch) {
      routePromise.catch(next);
    }
  };
}
