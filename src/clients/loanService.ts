import { LoanEnquiryResult } from '../common/types';

const sendRequest = async (url: string, method: string, data?: any) => {
  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
};

export const submitLoanEnquiry = async (data: any):  Promise<LoanEnquiryResult> => {
    return await sendRequest('http://localhost:3000/api/loan', 'POST', data);
}