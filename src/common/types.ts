import { z } from 'zod';
import { LoanDetailsFormSchema, PersonDetailsFormSchema } from './schemas';

export enum EmploymentStatus {
  Employed = 'Employed',
  SelfEmployed = 'Self-Employed',
  Unemployed = 'Unemployed',
}

export enum LoanPurpose {
  Vehicle = 'Vehicle',
  HomeImprovement = 'Home Improvement',
  Other = 'Other',
}

export type PersonDetails = z.infer<typeof PersonDetailsFormSchema>;

export type LoanDetails = z.infer<typeof LoanDetailsFormSchema>;

export enum LendFeeType {
  processing,
  application,
  none,
}

export interface LoanEnquiryResultItem {
  id: number;
  lenderName: string;
  monthlyRepayment: number;
  interestRate: number;
  fees: number;
  feeType: string;
}

export interface LoanEnquiryResult {
  results: LoanEnquiryResultItem[];
}

export type LoanEnquiry = PersonDetails & LoanDetails & LoanEnquiryResult;
