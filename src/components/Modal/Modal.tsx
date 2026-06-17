import './Modal.scss';
import type { ModalProps } from "../../interfaces/ModalProps";

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  // Close modal when Escape key is pressed
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div 
      className="modal-backdrop" 
      onClick={onClose}
      onKeyDown={handleKeyDown}
    >
      <div 
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
          type="button"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
