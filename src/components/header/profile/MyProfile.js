import styled from "styled-components";
import ButtonProfile from "./general/ButtonProfile";
import UserName from "./general/UserName";
import UserImage from "./general/UserImage";
import Section from "../../general/Section";
import {FiSettings} from "react-icons/fi";
import {CgProfile} from "react-icons/cg";
import {BiLogIn} from "react-icons/bi";
import { useContext } from "react";
import UserContext from "../../../context/user/UserContext";
import { Link, useNavigate } from "react-router-dom";

const icon = {
    marginRight: "5px",
    width: "20px",
    height: "20px"
}

const ProfileBox = styled.div`
    height: 100%;
    width: 100%;
    padding: 10px;
    &:before {
        content: "";
        border: 10px solid transparent;
        border-left-color: #fff;
        border-top-color: #fff;
        position: absolute;
        border-radius: 3px;
        top: -8px;
        right: 15px;
        box-shadow: -5px -5px 12px -2px rgb(0 0 0 / 30%);
        transform: rotate(45deg);
        z-index: 1002;
    }
`;

const ProfileHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #dadde1;
    padding-bottom: 10px;
    width: 100%;
`;

const ProfileList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    margin-top: 10px;
`;

const Item = styled.li`
    height: 50px;
    width: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 5px;
    cursor: pointer;
    border: ${props => props.border ? props.border : null};
    border-top: ${props => props.borderTop ? props.borderTop : null};
    transition: all 0.3s ease-in-out;
    &:hover {
        background: #f1f1f1;
    }
`;

const MyProfile = ({user, closeModal}) => {
    const {logOut} = useContext(UserContext)
    const history = useNavigate();
    const handlerLogOut = () => {
        history('/');
        logOut();
    }
    return (
        <ProfileBox>
            <ProfileHeader>
                <ButtonProfile height="100px" width="200px">
                    <UserImage
                    src={user.img}
                    alt={`${user.firstname} ${user.lastname}`}
                    height="100%"
                    width="100%"
                    />
                </ButtonProfile>
                <Section width="100%" height="100%" padding="0" display="flex" alignItems="center" justifyContent="space-between" direction="column" boxShadow="none">
                    <UserName color="#001036">{`Hola, ${user.firstname} ${user.lastname}`}</UserName>
                    <UserName color="#4A4A68" opacity="0.8">{user.email}</UserName>
                </Section>
            </ProfileHeader>
            <ProfileList>
                <Item>
                    <FiSettings style={icon} />
                    <UserName color="#001036">Settings</UserName>
                </Item>
                <Item>
                    <CgProfile style={icon} />
                    <UserName color="#001036">
                        <Link onClick={closeModal} to="/profile">Profile</Link>
                    </UserName>
                </Item>
                <Item borderTop="1px solid #dadde1">
                    <ButtonProfile margin="0" onClick={handlerLogOut} width="100%" height="100%">
                        <BiLogIn style={icon} />
                        <UserName color="#001036">Log out</UserName>
                    </ButtonProfile>
                </Item>
            </ProfileList>
        </ProfileBox>
    )
};

export default MyProfile;