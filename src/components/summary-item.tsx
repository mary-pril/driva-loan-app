import { SummaryFieldProps } from './form-field-props';

const SummaryItem: React.FC<SummaryFieldProps> = ({
    label,
    value,
    
  }) => ( 
    <p>{label}: {value}</p>
  );
  export default SummaryItem;