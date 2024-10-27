import { SelectFieldProps } from "./form-field-props";


const FormSelect: React.FC<SelectFieldProps> = ({
  label,
  name,
  options,
  value,
  onChange,
  register,
  error,
}) => (

  <div className="form-field">
    <label>{label}</label>
    <select value={value} 
        {...register(name)}
        onChange= {onChange}>
        {Object.values(options).map((item, i) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    {error && <span className="error-message">{error.message}</span>}
  </div>
);
export default FormSelect;