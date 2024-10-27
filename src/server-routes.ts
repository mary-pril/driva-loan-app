import { Router, Request, Response } from 'express';
import path from 'path';
import * as loanService from './services/loanService';

const clientPath = path.join(__dirname, '..', 'build');

const router = Router({
    strict: true,
    caseSensitive: true,
  });

  router.get('/ping', (req, res) => res.send('pong'));

  // API route example
  router.get('/api/hello', (req: Request, res: Response) => {
    res.json({ message: 'Hello from the server!' });
  });
  
  // Catch-all handler to serve the React app for any other routes
  router.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(clientPath, 'index.html'));
  });

  router.post(
    '/api/loan',
    (async (req: Request, res: Response) => {
      const data = await loanService.getLoanResults(req);
      res.send(data);
    }),
  );

  const routes = { router };
  export default routes;