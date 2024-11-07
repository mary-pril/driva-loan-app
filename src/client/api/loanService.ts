import { LoanEnquiry, LoanEnquiryResult } from '../../common/types';

const sendRequest = async (url: string, method: string, data?: LoanEnquiry) => {
  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.ok ? response.json() : null;
};

export const submitLoanEnquiry = async (
  data: LoanEnquiry
): Promise<LoanEnquiryResult | null> => {
  return await sendRequest('http://localhost:3000/api/loan', 'POST', data);
};
