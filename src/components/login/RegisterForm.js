import { Formik, Form } from "formik";
import * as Yup from 'yup';
import Button from "./Button";
import Input from "./Input";

const RegisterForm = () => {
    const handleSubmit = async (values) => {
        console.log(values);
    }
    return (
        <Formik
            initialValues={{ email: '', password: ''}} 
            onSubmit={handleSubmit}
            validationSchema={Yup.object({
                firstname: Yup.string().min(3, "Mínimo 3 caracteres").max(20, "Máximo 20 caracteres").required('Obligatorio'),
                lastname: Yup.string().min(3, "Mínimo 3 caracteres").max(20, "Máximo 20 caracteres").required('Obligatorio'),
                email: Yup.string().email("El email debe ser válido").required('Obligatorio'),
                password: Yup.string().min(4, "Mínimo 6 caracteres").max(10, "Máximo 10 caracteres").required('Obligatorio'),
                img: Yup.string().required('Obligatorio')
            })}
        >
            <Form>
                <Input name="firstname" type="text" label="Nombre" />
                <Input name="lastname" type="text" label="Apellido" />
                <Input name="email" label="Email" type="email" />
                <Input name="password" type="password" label="Contraseña" />
                <Input name="img" type="text" label="Imagen" />
                <Button type="submit">Registrar</Button>
            </Form>
        </Formik>
    )
};

export default RegisterForm;