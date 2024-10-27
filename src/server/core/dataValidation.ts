import { Request, Response, NextFunction  } from 'express';
import {  LoanDetailsFormSchema, PersonDetailsFormSchema } from '../../common/types';
import { z } from 'zod';

const validateLoanEnquiryRequest = (req: Request, res: Response, next: NextFunction) => {
    try {
        // Validate the request body against the schema
        PersonDetailsFormSchema.parse(req.body);
        LoanDetailsFormSchema.parse(req.body);

        next();
      } catch (error) {
        // Handle validation errors
        if (error instanceof z.ZodError) {
           const errs = error.errors.map(e => ({path: e.path.join('.'),  message: e.message}));
          return res.status(400).json(errs);
        }
        // Handle other errors
        return res.status(500).json({ message: 'Internal Server Error' });
      }
  };

export default validateLoanEnquiryRequest;