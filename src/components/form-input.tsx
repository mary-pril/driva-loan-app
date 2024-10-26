import { FormFieldProps } from "./form-field-props";


const FormInput: React.FC<FormFieldProps> = ({
  type,
  label,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}) => (
  <div className="form-field">
    <label>{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
    />
    {error && <span className="error-message">{error.message}</span>}
  </div>
);
export default FormInput;
