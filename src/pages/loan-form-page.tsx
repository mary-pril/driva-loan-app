import React from 'react';
import { useFormData } from './loan-form';
import { useNavigate } from 'react-router-dom';
import { loan_form_steps } from '../common/loan-form-steps';

const LoanFormBasePage: React.FC = () => {
  const { formData, setFormData } = useFormData();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, name: e.target.value });
  };

//   const handleNext = (pageName:string) => {
//     navigate(loan_form_steps[pageName].next);
//   };

//   const handleBack = (pageName:string) => {
//     navigate(loan_form_steps[pageName].back);
//   };

  return <div>hello</div>;
};

export default LoanFormBasePage;