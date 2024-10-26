import React from 'react';
import { useFormData } from './loan-form';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { LoanEnquiry } from '../common/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

type MyData = {
  firstName: string;
  email: string;
  collection: string;
}

const schema = z.object({
  firstName: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Email is not valid')
});
//, { required: true, pattern: /^\S+@\S+$/i }

const PersonalDetailsPage: React.FC = () => {
  const { register, trigger, formState: { errors } } = useForm<MyData>({
    resolver: zodResolver(schema),
  });
  const { formData, setFormData } = useFormData();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const handleNext = async () => {
    const result = await trigger();
    console.log('trigger ', result);
    if(result)
      navigate('/step2');
  };

  return (
    <div>
      <h2>Step 1: Personal details</h2>
      <input type="text" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
      <div>
        <label>Name:</label>
        <input {...register('firstName')} />
        {errors.firstName && <span>{errors.firstName.message}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input {...register('email')} /> 
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};


export default PersonalDetailsPage;