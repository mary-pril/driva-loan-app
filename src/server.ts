import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import routes from './server/routes';

const server = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
server.use(express.json());

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
server.use(loggerMiddleware);

// Serve static files from the React app
server.use(express.static(path.join(__dirname, '..', 'build')));

server.use(routes.router);

// Error-handling middleware
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
};
server.use(errorHandler);

const serverInst = server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export { server, serverInst };
