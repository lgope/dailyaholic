import "./Button.css";

interface IButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
  block?: boolean;
  type?: "button" | "submit" | "reset";
  color?: "primary" | "secondary" | "danger";
  isIcon?: boolean;
  form?: string;
}

const Button = ({
  children,
  onClick,
  disabled = false,
  className,
  block = false,
  type = "button",
  color,
  isIcon = false,
  form,
}: IButtonProps) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`button ${isIcon ? "icon" : ""} ${
          color === "primary" ? "primary" : ""
        } ${color === "secondary" ? "secondary" : ""}
                ${color === "danger" ? "danger" : ""}
                ${className} ${block ? "block" : ""} ${
          disabled ? "disabled" : ""
        }`}
        form={form}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;