import React from 'react';
import { useFormData } from './loan-form';
import SummaryItem from '../components/summary-item';

const LoanSummaryPage: React.FC = () => {
  const { formData } = useFormData();

  const handleSubmit = () => {
    // Submit form data
    console.log(formData);
    // Optionally navigate or show a success message
  };

  return (
    <div>
      <h2>Step 3: Summary of loan details </h2>
      <SummaryItem label = 'Loan amount (vehicle price - deposit)'  value = { (formData.price - formData.depositAmount).toString() } />
      <SummaryItem label = 'Loan purpose'  value = {formData.loanPurpose} />
      <SummaryItem label = 'Loan term'  value = { formData.loanTerm} />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default LoanSummaryPage;
