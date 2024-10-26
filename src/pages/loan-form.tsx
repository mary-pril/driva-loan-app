import React, { createContext, useContext, useState } from 'react';

interface FormData {
  name: string;
  email: string;
  age: number;
}

const FormContext = createContext<any>(null);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', age: 0 });
  
  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormData = () => useContext(FormContext);
