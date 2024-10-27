import { FieldError } from 'react-hook-form';

export type FormFieldProps = {
    type: string;
    label: string;
    placeholder?: string;
    name: string;
    onChange: any;
    register: any;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
    value?: string | number | undefined;
  };

export interface SelectFieldProps{
    label: string;
    name: string;
    options: object;
    value?: string | null | undefined;
    onChange: any;
    register: any;
    error: FieldError | undefined;
}

export interface SummaryFieldProps {
  label: string;
  value: string;
}