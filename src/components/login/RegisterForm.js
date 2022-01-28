import { Formik, Form } from "formik";
import * as Yup from 'yup';
import Button from "./Button";
import Input from "./Input";
import Section from "../general/Section";
import {ImUser} from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsCardImage } from "react-icons/bs";
import Icon from "../../styles/icons/Icon";
import { useRef, useCallback } from "react";

const RegisterForm = () => {
    const ref = useRef();
    const initialValues = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        img: ""
    };
    const handleSubmit = useCallback(async (values) => {
        console.log(values);
        const response = await fetch("https://pr0vius-presupuesto.herokuapp.com/api/v1/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values),
        });
        if(response.ok && response.status === 200) {
            console.log(response);
            ref.current.textContent = "Registro exitoso..."
            ref.current.style.color = "green";
            return true;
        }
        else {
            ref.current.textContent = "Se ha producido un problema con tu solicitud...";
            ref.current.style.color = "red";
            return false;
        }
    }, []);

    return (
        <Formik
            initialValues={initialValues} 
            onSubmit={async (values, {resetForm}) => {
                handleSubmit(values).then(response => response && resetForm());
            }}
            validationSchema={Yup.object({
                firstname: Yup.string().min(3, "Mínimo 3 caracteres").max(20, "Máximo 20 caracteres").required('Obligatorio'),
                lastname: Yup.string().min(3, "Mínimo 3 caracteres").max(20, "Máximo 20 caracteres").required('Obligatorio'),
                email: Yup.string().email("El email debe ser válido").required('Obligatorio'),
                password: Yup.string().min(4, "Mínimo 6 caracteres").max(10, "Máximo 10 caracteres").required('Obligatorio'),
                img: Yup.string().required('Obligatorio')
            })}
        >
            <Form>
                <Input name="firstname" type="text" label="Nombre" placeholder="Ingresa tu nombre...">
                    <ImUser style={Icon} />
                </Input>
                <Input name="lastname" type="text" label="Apellido" placeholder="Ingresa tu apellido...">
                    <ImUser style={Icon} />
                </Input>
                <Input name="email" label="Email" type="email" placeholder="Ingrese tu correo electrónico...">
                    <MdEmail style={Icon} />
                </Input>
                <Input name="password" type="password" label="Contraseña" placeholder="Ingresa tu contraseña...">
                    <RiLockPasswordFill style={Icon} />
                </Input>
                <Input name="img" type="text" label="Imagen" placeholder="Ingresa una imagen...">
                    <BsCardImage style={Icon} />
                </Input>
                <Section display="flex" justifyContent="space-around" alignItems ="center" width="100%" boxShadow="none" padding="0">
                    <Button 
                    type="submit"
                    fontSize="20px"
                    color="#fff" 
                    background="#00a400" 
                    border="none"
                    hoverBackground="linear-gradient(#79bc64, #578843)"
                    >
                        Registrar
                    </Button>
                    <Button 
                    type="reset"
                    fontSize="20px"
                    color="#fff" 
                    background="red" 
                    border="none"
                    hoverBackground="#472B2E"
                    >
                        Limpiar
                    </Button>
                </Section>
                <Section display="flex" justifyContent="center" alignItems="center" width="100%" boxShadow="none" padding="0">
                    <p ref={ref}></p>
                </Section>
            </Form>
        </Formik>
    )
};

export default RegisterForm;