import Button from "./Button";
import useModal from "../../hooks/useModal";
import Modal from "../modal/Modal";
import RegisterForm from "./RegisterForm";
import Section from "../general/Section";

const Register = () => {
    const [isOpen, openModal, closeModal] = useModal();
    return (
        <>
            <Section display="flex" justifyContent="center" alignItems ="center" width="100%" boxShadow="none">
                <Button onClick={openModal}
                    fontSize="20px"
                    color="#fff" 
                    background="#00a400" 
                    border="none"
                    hoverBackground="linear-gradient(#79bc64, #578843)"
                    >
                    Crear cuenta
                </Button>
            </Section>
            <Modal isOpen={isOpen} closeModal={closeModal}>
                <RegisterForm />
            </Modal>
        </>
    )
}

export default Register;