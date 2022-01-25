import { useContext } from "react/cjs/react.development"
import UserContext from "../context/user/UserContext"

const Home = () => {
    const {user} = useContext(UserContext);
    console.log(user);
    return (
        <div>
            <h1>{`${user.firstname} ${user.lastname}`}</h1>
            <img src={`${user.img}`} alt={`${user.firstname} ${user.lastname}`} />
            <h2>{user.email}</h2>
            <h3>{user.token}</h3>
        </div>
    )
}

export default Home;