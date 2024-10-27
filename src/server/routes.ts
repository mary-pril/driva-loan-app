import { Router, Request, Response } from 'express';
import path from 'path';
import * as loanService from './services/loanService';
import validateLoanEnquiryRequest from './core/dataValidation';
import catchAsyncErrors from './core/catch-async-errors';

const clientPath = path.join(__dirname, '..', 'build');

const router = Router({
    strict: true,
    caseSensitive: true,
  });

  router.get('/ping', (req, res) => res.send('pong'));
  
  // Catch-all handler to serve the React app for any other routes
  router.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(clientPath, 'index.html'));
  });

  router.post(
    '/api/loan',
    validateLoanEnquiryRequest,
    catchAsyncErrors(async (req: Request, res: Response) => {
      const data = await loanService.getLoanResults(req);
      res.send(data);
    }),
  );

  router.get('*', (req: Request, res: Response) => {
    res.status(404).send('404 Not Found');
  });

  const routes = { router };
  export default routes;