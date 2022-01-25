import "./Modal.css";
import {FaWindowClose} from "react-icons/fa";

const style = {
  icon: {
    color: "red",
    height: "25px",
    width: "25px",
  }
}
const Modal = ({ isOpen, closeModal, children}) => {
  return (
    <div className={`modal-overlay ${isOpen && "modal-open"}`}>
      <div className="modal-container">
        <div className="modal-header">
          <button className="modal-button-close" onClick={closeModal}>
            <FaWindowClose style={style.icon} />
          </button>
        </div>
        <div className="modal-main">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
