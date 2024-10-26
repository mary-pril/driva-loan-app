import { SelectFieldProps } from "./form-field-props";


const FormSelect: React.FC<SelectFieldProps> = ({
  label,
  name,
  options,
  selectedValue,
  register,
  error,
}) => (
  <div className="form-field">
    <label>{label}</label>
    <select value={selectedValue} 
        {...register(name)}>
        <option value="" disabled>Select ...</option>
        {Object.values(options).map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    {error && <span className="error-message">{error.message}</span>}
  </div>
);
export default FormSelect;