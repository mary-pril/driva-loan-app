import { EmploymentStatus, LoanPurpose } from './types';

export const InitLoanEnquiryData = {
  firstName: '',
  lastName: '',
  dob: '',
  email: '',
  mobile: '',
  address: '',
  empStatus: EmploymentStatus.Employed,
  income: 0,
  price: 0,
  depositAmount: 0,
  loanPurpose: LoanPurpose.Vehicle,
  loanTerm: 1,
  results: [],
};
