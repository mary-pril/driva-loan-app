import React, { createContext, useContext, useState } from 'react';
import { LoanEnquiry} from '../common/types';
import "./../components/input.scss";
import { InitLoanEnquiryData } from '../common/init-data';

const FormContext = createContext<any>(null);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<LoanEnquiry>(InitLoanEnquiryData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <FormContext.Provider value={{ formData, setFormData, handleChange }}>
      <div className="main">
        {children}
      </div>
    </FormContext.Provider>
  );
};

export const useFormData = () => useContext(FormContext);
