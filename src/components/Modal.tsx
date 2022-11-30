import { Dispatch, SetStateAction, useEffect } from "react";

interface ModalProps {
  text: string;
  setIsModal: Dispatch<SetStateAction<boolean>>;
}
const Modal = ({ text, setIsModal }: ModalProps) => {
  useEffect(() => {
    const modal = setTimeout(() => {
      setIsModal(false);
    }, 1000);
    return () => clearTimeout(modal);
  }, []);
  return (
    <div className="modal-wrapper">
      <p>{text}</p>
    </div>
  );
};
export default Modal;
