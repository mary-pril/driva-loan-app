import React from 'react';
import { useFormData } from './loan-form';
import FormInput from '../components/form-input';
import { LoanDetails, LoanPurpose } from '../../common/types';
import { LoanDetailsFormSchema } from '../../common/schemas';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormSelect from '../components/form-select';
import { submitLoanEnquiry } from '../api/loanService';
import { useNavigate } from 'react-router-dom';
import { range } from '../utils/range';

const LoanDetailsPage: React.FC = () => {
  const { formData, handleChange, handleChangeNumber, setFormData } =
    useFormData();
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<LoanDetails>({
    resolver: zodResolver(LoanDetailsFormSchema),
    mode: 'onBlur',
  });

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const result = await trigger();

    if (result) {
      const resData = await submitLoanEnquiry(formData);
      if (resData !== null) {
        setFormData({ ...formData, results: resData.results });
        navigate('/summary');
      } else {
        navigate('/error');
      }
    }
  };

  return (
    <div>
      <h2>Step 2: Loan Details</h2>
      <FormSelect
        label="Loan Purpose"
        name="loanPurpose"
        value={formData.loanPurpose}
        options={LoanPurpose}
        onChange={handleChange}
        register={register}
        error={errors.loanPurpose}
      />
      <FormInput
        type="number"
        label={`${formData.loanPurpose} price`}
        placeholder="min 2000"
        name="price"
        value={formData.price}
        onChange={handleChangeNumber}
        register={register}
        error={errors.price}
        valueAsNumber={true}
      />
      <FormInput
        type="number"
        label="Deposit"
        placeholder="Deposit amount"
        name="depositAmount"
        value={formData.depositAmount}
        onChange={handleChangeNumber}
        register={register}
        error={errors.depositAmount}
        valueAsNumber={true}
      />

      <FormSelect
        label="Loan Term (years)"
        name="loanTerm"
        onChange={handleChangeNumber}
        options={range(1, 7)}
        register={register}
        error={errors.loanTerm}
        valueAsNumber={true}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default LoanDetailsPage;
