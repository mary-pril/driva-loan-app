import React, { createContext, useContext, useState } from 'react';
import { LoanEnquiry} from '../common/types';
import "./../components/input.scss";
import { InitLoanForm } from '../common/loadForm-init';

const FormContext = createContext<any>(null);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<LoanEnquiry>(InitLoanForm);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('saving ...');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('submitting ...', formData);
  }

  return (
    <FormContext.Provider value={{ formData, setFormData, handleChange, handleSubmit }}>
      <div className="main">
        {children}
      </div>
    </FormContext.Provider>
  );
};

export const useFormData = () => useContext(FormContext);
