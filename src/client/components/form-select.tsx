import { SelectFieldProps } from './form-field-props';

const FormSelect: React.FC<SelectFieldProps> = ({
  label,
  name,
  options,
  value,
  onChange,
  register,
  error,
  valueAsNumber,
}) => (
  <div className="form-field" data-name={name}>
    <label>{label}</label>
    <div>
      <select {...register(name, { onChange, value, valueAsNumber })}>
        {Object.values(options).map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
    <div>{error && <span className="error-message">{error.message}</span>}</div>
  </div>
);
export default FormSelect;
