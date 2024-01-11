import React from "react";
import { createPortal } from "react-dom";
import "./CustomModal.css";

interface IModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  title?: string;
  data?: Record<string, unknown>;
}

const CustomModal = ({
  children,
  isOpen,
  onClose,
  className,
  title,
}: IModalProps) => {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <section className="modal" aria-modal="true" role="dialog">
      <div className="body">
        {/* Close btn */}
        <button className="modal-close-btn" onClick={onClose}>
          {/* <Icons name="xCross" size={24} /> */}
          Close
        </button>
        {/* Main content */}
        <div className={`modal-content ${className}`}>
          <h1 className="title">{title}</h1>
          {children}
        </div>
      </div>
    </section>,
    document.getElementById("custom-modal") as HTMLElement
  );
};

export default CustomModal;
