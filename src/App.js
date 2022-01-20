import UserState from "./context/user/UserState";
import Start from "./components/Start";

const App = () => {
  return (
    <UserState>
          <Start />
    </UserState>
  )
};

export default App;
