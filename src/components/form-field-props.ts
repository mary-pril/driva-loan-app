import { FieldError } from 'react-hook-form';

export type FormFieldProps = {
    type: string;
    label: string;
    placeholder?: string;
    name: string;
    register: any;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
  };

export interface SelectFieldProps{
    label: string;
    name: string;
    options: object;
    selectedValue: string;
    register: any;
    error: FieldError | undefined;
}