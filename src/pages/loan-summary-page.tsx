import React from 'react';
import { useFormData } from './loan-form';
import { useNavigate } from 'react-router-dom';

const LoanSummaryPage: React.FC = () => {
  const { formData } = useFormData();
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Submit form data
    console.log(formData);
    // Optionally navigate or show a success message
  };

  return (
    <div>
      <h2>Step 3: Review</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default LoanSummaryPage;
