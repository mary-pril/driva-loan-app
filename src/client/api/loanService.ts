import { LoanEnquiry, LoanEnquiryResult } from '../../common/types';

const sendRequest = async (url: string, method: string, data?: any) => {
  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return response.ok ? response.json() : null;
};

export const submitLoanEnquiry = async (data: LoanEnquiry):  Promise<LoanEnquiryResult | null> => {

  // Refine the data before sending it to the server
    const refinedData = {...data, 
        income: parseInt(data.income.toString()),
        loanAmount: parseInt(data.income.toString()), 
        loanTerm: parseInt(data.loanTerm.toString()),
        depositAmount: parseInt(data.depositAmount.toString()),
        price: parseInt(data.price.toString())
      };
    

    return await sendRequest('http://localhost:3000/api/loan', 'POST', refinedData);
}