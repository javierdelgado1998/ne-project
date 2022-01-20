import Button from "./Button";
import useModal from "../../hooks/useModal";
import Modal from "../modal/Modal";
import RegisterForm from "./RegisterForm";

const Register = () => {
    const [isOpen, openModal, closeModal] = useModal();
    return (
        <>
            <Button onClick={openModal}>Crear usuario</Button>
            <Modal isOpen={isOpen} closeModal={closeModal}>
                <RegisterForm />
            </Modal>
        </>
    )
}

export default Register;