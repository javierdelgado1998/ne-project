import { Formik, Form } from "formik";
import * as Yup from 'yup';
import Input from "./Input";
import Button from "./Button";
import { useContext } from "react/cjs/react.development";
import UserContext from "../../context/user/UserContext";
import Section from "../Section";
import {MdEmail} from "react-icons/md"
import {RiLockPasswordFill} from "react-icons/ri";
import Icon from "../../styles/icons/Icon";

const LoginForm = () => {
    const {login, setUser} = useContext(UserContext);
    const handleSubmit = async (values) => {
        const response = await fetch("https://pr0vius-presupuesto.herokuapp.com/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values),
        });
        if(response.ok && response.status === 200) {
            const data = await response.json();
            setUser(data.data);
            login();
        }
    };

    return (
        <Formik
            initialValues={{ email: '', password: ''}} 
            onSubmit={handleSubmit}
            validationSchema={Yup.object({
                email: Yup.string().email("El email debe ser válido").required('Obligatorio'),
                password: Yup.string().min(4, "Mínimo 6 caracteres").max(10, "Máximo 10 caracteres").required('Obligatorio')
            })}
        >
            <Form>
                <Input name="email" placeholder="Ingrese su correo electrónico..." label="Email" type="email" >
                    <MdEmail style={Icon} />
                </Input>
                <Input name="password" placeholder="Ingrese su contraseña..." type="password" label="Contraseña" >
                    <RiLockPasswordFill style={Icon} />
                </Input>
                <Section display="flex" justifyContent="center" alignItems ="center" width="100%" boxShadow="none">
                    <Button
                        type="submit" 
                        background="#0081B7" 
                        color="#fff" 
                        border="2px solid #00b0ea" 
                        width="100%" 
                        fontSize="20px"
                        hoverBackground="#225380"
                        hoverBorder="2px solid #225380"
                        >
                        Iniciar sesión
                    </Button>
                </Section>
            </Form>
        </Formik>
    )
}

export default LoginForm;