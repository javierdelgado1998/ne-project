import { useContext } from "react";
import Container from "./Container";
import Section from "./Section";
import LoginForm from "./login/LoginForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "../context/user/UserContext";
import Home from "./Home";
import Register from "./login/Register";

const Start = () => {
    const {logged} = useContext(UserContext);
    if(logged) { 
        return (
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </BrowserRouter>
        );
    }
    return (
        <Container>
          <Section>
            <LoginForm />
          </Section>
          <Section>
              <Register />
          </Section>
        </Container>
    )
}

export default Start;