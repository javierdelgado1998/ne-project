import { useContext } from "react/cjs/react.development"
import UserContext from "../context/user/UserContext"

const Home = () => {
    const {user} = useContext(UserContext);
    return (
        <div>
            <h1>{`${user.name} ${user.lastname}`}</h1>
            <h2>{user.email}</h2>
        </div>
    )
}

export default Home;