import Modal from "react-modal";
import { NewTransactionModal } from "../NewTransactionModal";

import { FiX } from "react-icons/fi";

type ModalProps = {
  isNewTransactionModalOpen: boolean;
  onRequestClose: () => void;
};

Modal.setAppElement("#root");

export function ModalComponent({
  isNewTransactionModalOpen,
  onRequestClose
}: ModalProps) {
  return (
    <Modal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button className="react-modal-close" onClick={onRequestClose}>
        <FiX />
      </button>
      <NewTransactionModal />
    </Modal>
  );
}
