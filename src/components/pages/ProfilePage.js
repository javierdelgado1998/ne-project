import UserContext from "../../context/user/UserContext";
import { useContext } from "react";
import Container from "../general/Container";
import UserImage from "../header/profile/general/UserImage";

const ProfilePage = () => {
    const {user} = useContext(UserContext);
    return (
        <Container>
            <UserImage 
                src={user.img} 
                alt={`${user.firstname} ${user.lastname}`}
                width="200px" 
                height="200px"
                borderRadius="0"
            />
        </Container>
    )
}

export default ProfilePage;