import React from "react";

interface IconButtonPropsType {
  title?: string;
  onClick: () => void;
  className?: string;
  iconName: string;
  iconClass?: string;
}

const IconButton = ({
  title = "",
  onClick,
  className,
  iconName,
  iconClass,
}: IconButtonPropsType) => {
  return (
    <button onClick={onClick} className={className} title={title}>
      <span className={`material-icons-outlined ${iconClass}`}>{iconName}</span>
    </button>
  );
};

export default IconButton;
