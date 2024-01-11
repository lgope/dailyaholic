import { createContext, useContext, useState } from "react";
import { TModalType } from "../types/types";
import AddEvent from "../components/EventPopup/AddEvent";

interface IModalContext {
  type: TModalType | null;
  isOpen: boolean;
  data?: string;
  onOpenModal: (modalType: TModalType, data?: string) => void;
  onClose: () => void;
}

const ModalContext = createContext<IModalContext>({
  type: null,
  isOpen: false,
  onOpenModal: () => {},
  onClose: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useModalContext = () => {
  return useContext(ModalContext);
};

export const ModalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<TModalType | null>(null);
  const [data, setData] = useState<string>("");

  const onOpenModal = (type: TModalType, data?: string) => {
    setModalType(type);
    setData(data || "");
    setIsOpen(true);
  };
  const onClose = () => {
    setModalType(null);
    setData("");
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        type: modalType,
        data,
        onOpenModal,
        onClose,
      }}
    >
      {children}
      <AddEvent />
    </ModalContext.Provider>
  );
};
