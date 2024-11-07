import React, { createContext, useContext, useState } from 'react';
import { LoanEnquiry } from '../../common/types';
import './../components/components.scss';
import './pages.scss';
import { InitLoanEnquiryData } from '../../common/init-data';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormContext = createContext<any>(null);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<LoanEnquiry>(InitLoanEnquiryData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (!isNaN(val)) {
      setFormData({ ...formData, [e.target.name]: val });
    }
  };

  return (
    <FormContext.Provider
      value={{ formData, setFormData, handleChange, handleChangeNumber }}
    >
      <div className="container">{children}</div>
    </FormContext.Provider>
  );
};

export const useFormData = () => useContext(FormContext);
