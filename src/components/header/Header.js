import styled from "styled-components";
import SliderButton from "./SliderButton";
import Profile from "./profile/Profile";

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

const Header = () => {
    return (
      <HeaderContainer>
        <LogoContainer>
          <LogoImage
            src="https://demo.dashboardpack.com/admindek-html/files/assets/images/logo.png"
            alt="theme logo"
          />
          <SliderButton />
        </LogoContainer>
        <ProfileContainer>
          <Profile />
        </ProfileContainer>
      </HeaderContainer>
    );
}

export default Header;