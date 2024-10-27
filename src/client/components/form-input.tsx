import { FormFieldProps } from "./form-field-props";


const FormInput: React.FC<FormFieldProps> = ({
  type,
  label,
  placeholder,
  name,
  onChange,
  register,
  error,
  valueAsNumber,
  value
}) => (
  <div className="form-field">
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
      onChange= {onChange}
      value = {value}
    />
    {error && <span className="error-message">{error.message}</span>}
  </div>
);
export default FormInput;
