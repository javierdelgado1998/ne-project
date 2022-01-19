import { useContext, createContext, useState } from "react";
import Container from "./components/Container";
import Section from "./components/Section";
import LoginForm from "./components/login/LoginForm";

const Context = createContext({});

const LoginProvider = ({children}) => {
  const [logged, setLogged] = useState(false);
  const value = {
    logged,
    login: () => setLogged(true),
    logout: () => setLogged(false),
  }
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

const App = () => {
  const {logged} = useContext(Context);
  if(logged) { 
      return (
        <LoginProvider>
          <div>HOME</div>
        </LoginProvider>
      )
  }
  return (
    <LoginProvider>
      <Container>
        <Section>
          <LoginForm />
        </Section>
      </Container>
    </LoginProvider>
  )
};

export default App;
