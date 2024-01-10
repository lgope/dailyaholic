import { useEffect, useState } from "react";
import popupStyles from "./custom-popup.module.css";

interface CustomPopupPropsType {
  title: string;
  open: boolean;
  onClose: (a: boolean) => void;
  children: React.ReactElement;
}

const CustomPopup = ({
  title = "",
  open,
  onClose,
  children,
}: CustomPopupPropsType) => {
  const [show, setShow] = useState(false);

  const closeHandler = () => {
    setShow(false);
    onClose(false);
  };

  useEffect(() => {
    setShow(open);
  }, [open]);

  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0",
      }}
      className={popupStyles.overlay}
    >
      <div className={popupStyles.popup}>
        <h2>{title}</h2>
        <span className={popupStyles.close} onClick={closeHandler}>
          &times;
        </span>
        <div className={popupStyles.content}>{children}</div>
      </div>
    </div>
  );
};

export default CustomPopup;
