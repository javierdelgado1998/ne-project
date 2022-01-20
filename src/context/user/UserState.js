import { useReducer } from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";

const UserState = ({children}) => {
    const setUser = (data) => {
        dispatch({
            type: "SET_USER",
            payload: data
        })
    };
    const login = () => {
        dispatch({
            type: "LOGIN"
        })
    };
    const logOut = () => {
        dispatch({
            type: "LOG_OUT"
        })
    };
    const initialState = {
      logged: false,
      user: {},
      setUser,
      login,
      logOut,
    };
    const [state, dispatch] = useReducer(UserReducer, initialState);
    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}

export default UserState;