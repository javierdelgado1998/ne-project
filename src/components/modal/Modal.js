import "./Modal.css";

const Modal = ({ isOpen, closeModal, children }) => {
  return (
    <div className={`modal-overlay ${isOpen && "modal-open"}`}>
      <div className="modal-container">
        <div className="modal-header">
          <button className="modal-button-close" onClick={closeModal}>
            <span>X</span>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
