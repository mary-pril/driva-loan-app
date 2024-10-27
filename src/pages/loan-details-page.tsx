import React from 'react';
import { useFormData } from './loan-form';
import FormInput from '../components/form-input';
import { LoanDetails, LoanDetailsFormSchema, LoanPurpose } from '../common/types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormSelect from '../components/form-select';
import { submitLoanEnquiry } from '../clients/loanService';
import { useNavigate } from 'react-router-dom';


const LoanDetailsPage: React.FC = () => {
  const { formData, handleChange, setFormData } = useFormData();
  const { register, trigger, formState: { errors } } = useForm<LoanDetails>({
    resolver: zodResolver(LoanDetailsFormSchema),
  });

  const navigate = useNavigate();
  
  const handleSubmit = async () => {
    const result = await trigger();

    if(result)
    {
      const resData  = await submitLoanEnquiry(formData);
      if(resData !== null){
        setFormData({ ...formData,  results: resData.results });
        navigate('/summary');
      }else{
        navigate('/error');
      }
    }
  };

  return (
    <div>
      <h2>Step 2: Loan Details</h2>
      <FormSelect 
            label='Loan Purpose'
            name='loanPurpose' 
            value={formData.loanPurpose}
            options = { LoanPurpose } 
            onChange={handleChange} 
            register={register} 
            error={errors.loanPurpose} 
          />
      <FormInput
            type="number"
            label= {`${formData.loanPurpose} price`}
            placeholder="2000"
            name="price"
            value={formData.price}
            onChange={handleChange} 
            register={register}
            error={errors.price}
            valueAsNumber={true}
          />
      <FormInput
            type="number"
            label="Deposit"
            placeholder="Loan amount"
            name="depositAmount"
            value={formData.depositAmount}
            onChange={handleChange} 
            register={register}
            error={errors.depositAmount} 
            valueAsNumber = {true} />

      <FormInput label='Loan Term (years)'
               name='loanTerm' 
              type='number' 
              onChange={handleChange} 
              value={formData.loanTerm}
              register={register} 
              error={errors.loanTerm} 
              valueAsNumber={true}
          />


      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default LoanDetailsPage;
