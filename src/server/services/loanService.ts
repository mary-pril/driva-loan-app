import { Request } from 'express';
import { results } from './data/result';
import { LoanDetails, LoanEnquiryResult, PersonDetails } from './../../common/types';

const calculateLoanResults = (loanDetails: any, personDetails: any) => {
    console.log('personDetails', personDetails);
    console.log('loanDetails', loanDetails);
    
    console.log('Calculating loan results');
    return results;
}

export const getLoanResults = async(req: Request): Promise<LoanEnquiryResult> => {
    const loanDetails = req.body as LoanDetails;
    const personDetails = req.body as PersonDetails;
    const loanResults = calculateLoanResults(loanDetails, personDetails);
    return {results : loanResults} as LoanEnquiryResult;
}

