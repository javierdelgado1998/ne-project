import { Formik, Form } from "formik";
import * as Yup from 'yup';
import Input from "./Input";
import Button from "./Button";
import { useContext } from "react/cjs/react.development";
import UserContext from "../../context/user/UserContext";

const LoginForm = () => {
    const {login, setUser} = useContext(UserContext);
    const handleSubmit = async (values) => {
        setUser({
            name: "Javier",
            lastname: "Delgado",
            email: "javi98delgado@gmail.com"
        })
        login();
/*         const response = await fetch("https://pr0vius-presupuesto.herokuapp.com/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values),
        });
        if(response.ok && response.status === 200) {
            const data = await response.json();
            console.log(data);
        } */
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