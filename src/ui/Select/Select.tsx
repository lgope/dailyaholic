import { useId } from "react";
import "./Select.css";

type OptionType = {
  value: string | number;
  name: string;
};

interface ISelectProps {
  title?: string;
  label?: string;
  options: OptionType[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string | number;
  className?: string;
}

const Select = ({
  title,
  label,
  options,
  onChange,
  value,
  className,
}: ISelectProps) => {
  const newId = useId();
  return (
    <div className="wrapper">
      {label && (
        <label className="label" htmlFor={newId}>
          {title}
        </label>
      )}
      <select
        title={title}
        id={newId}
        className={`select ${className}`}
        value={value}
        onChange={onChange}
        name={title}
        aria-label={label}
        aria-labelledby={newId}
      >
        {options.map(({ value, name }: OptionType) => (
          <option className="option" key={value} value={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
