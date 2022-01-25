import UserContext from "../../context/user/UserContext";
import { useContext } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
    width: 100%;
    min-height: 70px;
    background: #fff;
    box-shadow: 0px 2px 3px rgb(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
`;

const UserImage = styled.img`
    border-radius: 50%;
    border 2px solid #fff;
    box-shadow: 0 5px 10px 0 rgb(43 43 43 / 20%);
    vertical-align: middle;
    width: 40px;
    margin-right: 10px;
`;

const Header = () => {
    const {user} = useContext(UserContext);
    console.log(user);
    return (
        <HeaderContainer>
            <h3>Email: {user.email}</h3>
            <ProfileContainer>
                <UserImage src={user.img} alt={`${user.firstname} ${user.lastname}`} />
                <span>{`${user.firstname} ${user.lastname}`}</span>
            </ProfileContainer>
        </HeaderContainer>
    )
}

export default Header;