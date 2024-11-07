import { InputFieldProps } from './form-field-props';

const FormInput: React.FC<InputFieldProps> = ({
  type,
  label,
  placeholder,
  name,
  onChange,
  register,
  error,
  value,
  valueAsNumber,
}) => (
  <div className="form-field" data-name={name}>
    <label htmlFor={name}>{label}</label>
    <div>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, { valueAsNumber, onChange })}
        defaultValue={value == 0 ? undefined : value}
      />
    </div>
    <div>{error && <span className="error-message">{error.message}</span>}</div>
  </div>
);
export default FormInput;
