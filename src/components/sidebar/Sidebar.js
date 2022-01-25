import styled from "styled-components";
import Container from "../Container";
import {BsLayoutSidebarInsetReverse, BsLayoutSidebarInset} from "react-icons/bs";
import { useState } from "react";
import Navbar from "./Navbar";

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
    width: 100%;
    box-shadow: 0 2px 4px 0 rgb(43 43 43 / 10%);
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

const SideBar = () => {
    const [active, setActive] = useState(true);
    const toggleBar = () => {
        setActive(!active);
    };
    return (
        <Container direction="column" justifyContent="flex-start" background="#263544" width="300px">
            <LogoContainer>
                <LogoImage src="https://demo.dashboardpack.com/admindek-html/files/assets/images/logo.png" alt="theme logo" />
                <SliderButton onClick={toggleBar}>
                    {active ? <SliderActive /> : <SliderInactive />}
                </SliderButton>
            </LogoContainer>
            {active ? <Navbar /> : null}
        </Container>
    )
}

export default SideBar;