import React from 'react';
import { useFormData } from './loan-form';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { EmploymentStatus, PersonDetails, PersonDetailsFormSchema } from '../common/types';
import { zodResolver } from '@hookform/resolvers/zod';

import FormInput from '../components/form-input';
import FormSelect from '../components/form-select';


const PersonalDetailsPage: React.FC = () => {
  const { register, trigger, formState: { errors } } = useForm<PersonDetails>({
    resolver: zodResolver(PersonDetailsFormSchema),
  });
  const { handleChange, handleChangeNumber, formData } = useFormData();
  const navigate = useNavigate();

  const handleNext = async () => {
    const result = await trigger();
    if(result)
      navigate('/step2');
  };

  return (
    <div>
      <h2>Step 1: Personal details</h2>
      <FormInput
            type="text"
            label="First name"
            name="firstName"
            placeholder='Enter your First name'
            value={formData.firstName}
            onChange={handleChange} 
            register={register}
            error={errors.firstName}
          />
      <FormInput
            type="text"
            label="Last name"
            name="lastName"
            placeholder='Enter your Family Name'
            value={formData.lastName}
            onChange={handleChange} 
            register={register}
            error={errors.lastName}
          />
          <FormInput
            type="date"
            label="Date of Birth"
            placeholder='Enter your DOB'
            name="dob"
            value={formData.dob}
            onChange={handleChange} 
            register={register}
            error={errors.dob}
          />
          <FormInput
            type="email"
            label="Email"
            name="email"
            placeholder='Enter your email'
            value={formData.email}
            onChange={handleChange} 
            register={register}
            error={errors.email}
          />
          <FormInput
            type="text"
            label="Mobile"
            name="mobile"
            placeholder='Enter your phone number'
            value={formData.mobile}
            onChange={handleChange} 
            register={register}
            error={errors.mobile}
          />
          <FormInput
            type="text"
            label="Address"
            name="address"
            placeholder='Enter your address'
            value={formData.address}
            onChange={handleChange} 
            register={register}
            error={errors.address}
          />
          <FormSelect
            label="Employment Status"
            name="empStatus"
            options={EmploymentStatus}
            value={formData.empStatus}
            onChange={handleChange} 
            register={register}
            error={errors.empStatus}
          />
        { formData.empStatus === EmploymentStatus.Employed && <FormInput
            type="text"
            label="Employer Name"
            name="empName"
            placeholder='Enter employer name'
            value={formData.empName}
            onChange={handleChange} 
            register={register}
            error={errors.empName}
          />}
          <FormInput
            type="number"
            label="Annual Income"
            name="income"
            placeholder= 'Enter anual income'
            value={formData.income}
            onChange={handleChange} 
            register={register}
            error={errors.income}
            valueAsNumber = {true}
          />

      <button onClick={handleNext}>Next</button>
    </div>
  );
};


export default PersonalDetailsPage;