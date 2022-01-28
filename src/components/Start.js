import { useContext } from "react";
import Container from "./general/Container";
import Section from "./general/Section";
import LoginForm from "./login/LoginForm";
import { Route, Routes } from "react-router-dom";
import UserContext from "../context/user/UserContext";
import Home from "./pages/Home";
import Register from "./login/Register";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import { Provider } from "react-redux";
import store from "..";
import Pages from "./pages/Pages";

const Start = () => {
    const {logged} = useContext(UserContext);
    if(logged) { 
        return (
          <Provider store={store}>
            <Container direction="column">
              <Header />
              <Container>
                <Sidebar />
                <Pages>
                  <Routes>
                    <Route path="/" element={<Home />} />
                  </Routes>
                </Pages>
              </Container>
            </Container>
          </Provider>
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