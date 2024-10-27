import { results } from '../services/data/result';
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
    price: 2000, 
    depositAmount: 0, 
    loanPurpose: 
    LoanPurpose.Vehicle, 
    loanTerm: 0, 
    results: [] as any
};
  