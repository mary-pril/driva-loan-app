/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldError, UseFormRegister } from 'react-hook-form';

interface FormFieldProps {
  label: string;
  placeholder?: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  register: UseFormRegister<any>;
  error: FieldError | undefined;
  value?: string | number | undefined;
}

export interface InputFieldProps extends FormFieldProps {
  type: string;
  placeholder?: string;
  valueAsNumber?: boolean;
  valueAsDate?: boolean;
}

export interface SelectFieldProps extends FormFieldProps {
  options: object;
  valueAsNumber?: boolean;
}

export interface SummaryFieldProps {
  label: string;
  value: string;
}
