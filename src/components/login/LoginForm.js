import { Formik, Form } from "formik";
import * as Yup from 'yup';
import Input from "./Input";
import Button from "./Button";

const LoginForm = () => {
    const handleSubmit = async (values) => {
        const response = await fetch("https://pr0vius-presupuesto.herokuapp.com/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values),
        });
        console.log(response);
        if(response.ok && response.status === 200) {
            const data = await response.json();
            console.log(data);
        }
    }
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
                <Input name="email" label="Email" type="email" />
                <Input name="password" type="password" label="Contraseña" />
                <Button type="submit">Iniciar sesión</Button>
            </Form>
        </Formik>
    )
}

export default LoginForm;