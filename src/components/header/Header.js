import UserContext from "../../context/user/UserContext";
import { useContext, useState } from "react";
import styled from "styled-components";
import {BsLayoutSidebarInsetReverse, BsLayoutSidebarInset} from "react-icons/bs";
import { useDispatch } from "react-redux";

const HeaderContainer = styled.header`
    width: 100%;
    height: 73px;
    background: #fff;
    box-shadow: 0px 2px 3px rgb(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
`;

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
    height: 73px;
`;

const UserImage = styled.img`
    border-radius: 50%;
    border 2px solid #fff;
    box-shadow: 0 5px 10px 0 rgb(43 43 43 / 20%);
    vertical-align: middle;
    width: 40px;
    margin-right: 10px;
`;

const SliderActive = styled(BsLayoutSidebarInsetReverse)`
    width: 20px;
    height: 20px;
    color: #fff;
`;

const SliderInactive = styled(BsLayoutSidebarInset)`
    width: 20px;
    height: 20px;
    color: #fff;
`;

const LogoContainer = styled.div`
    background: #263544;
    padding: 20px 10px;
    display: flex;
    align-items: center;
    height: 73px;
    width: 300px;
    box-shadow: 0 2px 4px 0 rgb(43 43 43 / 10%);
    justify-content: center;
`;

const LogoImage = styled.img`
    max-width: 100%;
    height: auto;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    border-style: none;
    margin-right: 50px;
`;

const SliderButton = styled.button`
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: 0;
    border: 0;
`;

const Header = () => {
    const {user} = useContext(UserContext);
    const [active, setActive] = useState(true);
    const dispatch = useDispatch();
    const toggleBar = () => {
        setActive(!active);
        dispatch({type: "TOGGLE_BAR"});
    };
    return (
      <HeaderContainer>
        <LogoContainer>
          <LogoImage
            src="https://demo.dashboardpack.com/admindek-html/files/assets/images/logo.png"
            alt="theme logo"
          />
          <SliderButton onClick={toggleBar}>
            {active ? <SliderActive /> : <SliderInactive />}
          </SliderButton>
        </LogoContainer>
        <ProfileContainer>
          <UserImage
            src={user.img}
            alt={`${user.firstname} ${user.lastname}`}
          />
          <span style={{color: "#333", fontSize: ".9375rem"}}>{`${user.firstname} ${user.lastname}`}</span>
        </ProfileContainer>
      </HeaderContainer>
    );
}

export default Header;