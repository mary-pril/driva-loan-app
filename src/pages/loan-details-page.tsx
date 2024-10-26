import React from 'react';
import { useFormData } from './loan-form';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/form-input';
import { LoanDetails, LoanPurpose } from '../common/types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import FormSelect from '../components/form-select';

const schema = z.object({
  price: z.number().gte(2000, 'Price is required to be minimum 2000'),
  depositAmount: z.number()
})
.refine( data => data.price - data.depositAmount > 2000, { message: 'Deposit amount should be at least 2000 less than price', path: ["depositAmount"] });

const LoanDetailsPage: React.FC = () => {
  const { formData, setFormData } = useFormData();
  const { register, trigger, formState: { errors } } = useForm<LoanDetails>({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handleNext = async () => {
    const result = await trigger();
    console.log('trigger ', result);
    console.log('formData ', formData);
    if(result)
    navigate('/summary');
  };

  return (
    <div>
      <h2>Step 2: Email</h2>
      <FormInput
            type="number"
            label="Vehicle price"
            placeholder="First name"
            name="price"
            register={register}
            error={errors.price}
            valueAsNumber={true}
          />
      <FormInput
            type="number"
            label="Deposit"
            placeholder="Loan amount"
            name="depositAmount"
            register={register}
            error={errors.depositAmount} 
            valueAsNumber = {true} />
            <FormSelect label='Loan Purpose'
               name='loanPurpose' 
              options = { LoanPurpose } 
              selectedValue={formData.loanPurpose} 
              register={register} 
              error={errors.loanPurpose} />


      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default LoanDetailsPage;
