import { useContext } from "react";
import Container from "./Container";
import Section from "./Section";
import LoginForm from "./login/LoginForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "../context/user/UserContext";
import Home from "./Home";
import Register from "./login/Register";
import SideBar from "./sidebar/Sidebar";
import Header from "./header/Header";
const Start = () => {
    const {logged} = useContext(UserContext);
    if(logged) { 
        return (
          <Container justifyContent="flex-start">
            <SideBar />
            <Container direction="column" width="100%">
              <Header />
              <Container>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Home />} />
                  </Routes>
                </BrowserRouter>
              </Container>
            </Container>
          </Container>
        );
    }
    return (
        <Container direction="column">
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