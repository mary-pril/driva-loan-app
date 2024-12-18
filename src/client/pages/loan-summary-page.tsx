import React from 'react';
import { useFormData } from './loan-form';
import SummaryItem from '../components/summary-item';
import { LendFeeType, LoanEnquiryResultItem } from '../../common/types';

const LoanSummaryPage: React.FC = () => {
  const { formData } = useFormData();

  const getFeeText = (item: LoanEnquiryResultItem) => {
    const feeType = LendFeeType[item.feeType as keyof typeof LendFeeType];

    switch (feeType) {
      case LendFeeType.application:
        return `$${item.fees} application fee`;
      case LendFeeType.processing:
        return `$${item.fees} processing fee`;
      case LendFeeType.none:
        return `No fees`;
      default:
        return `$${item.fees} other fee`;
    }
  };

  return (
    <div>
      <h2>Step 3: Summary of loan details </h2>
      <div className="summary-desc">
        <SummaryItem
          label="Loan amount (vehicle price - deposit)"
          value={`$${formData.price - formData.depositAmount}`}
        />
        <SummaryItem label="Loan purpose" value={formData.loanPurpose} />
        <SummaryItem label="Loan term" value={`${formData.loanTerm} years`} />
      </div>

      <table>
        <thead>
          <tr>
            <th>Lender name</th>
            <th>Monthly repayment</th>
            <th>Interest rate</th>
            <th>Fees</th>
          </tr>
        </thead>
        <tbody>
          {formData.results.map(
            (item: LoanEnquiryResultItem, index: number) => (
              <tr key={index}>
                <td data-cell="name">{item.lenderName}</td>
                <td data-cell="rate">{item.interestRate}</td>
                <td data-cell="repay">{item.monthlyRepayment} % APR</td>
                <td data-cell="fee">{getFeeText(item)}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LoanSummaryPage;
