import styled from "styled-components";
import {ImUsers} from "react-icons/im";

const Nav = styled.nav`
    height: 100%;
    background: #263544;
    width: 100%;
`;

const Ul = styled.ul`
    background: #263544;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0;
`;

const Li = styled.li`
    background: #263544;
    list-style: none;
    color: #b7c0cd;
    margin-bottom: 15px;
    opacity: 1;
    cursor: pointer;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    
    &:hover {
        color: #fff;
        background: #1d2531;
        border-left: 5px solid #42a5f5;
    }

    &:focus {
        color: #fff;
        background: #1d2531;
        border-left: 5px solid #42a5f5;
    }
`;

const Users = styled(ImUsers)`
    margin-right: 10px;
`;

const Navbar = () => {
    return (
        <Nav>
            <Ul>
                <Li>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Users />
                        <p>Miembros</p>
                    </div>
                </Li>
                <Li>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Users />
                        <p>Miembros</p>
                    </div>
                </Li>
                <Li>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Users />
                        <p>Miembros</p>
                    </div>
                </Li>
                <Li>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Users />
                        <p>Miembros</p>
                    </div>
                </Li>
                <Li>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Users />
                        <p>Miembros</p>
                    </div>
                </Li>
                <Li>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Users />
                        <p>Miembros</p>
                    </div>
                </Li>
                <Li>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Users />
                        <p>Miembros</p>
                    </div>
                </Li>
                <Li>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Users />
                        <p>Miembros</p>
                    </div>
                </Li>
                <Li>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Users />
                        <p>Miembros</p>
                    </div>
                </Li>
                <Li>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Users />
                        <p>Miembros</p>
                    </div>
                </Li>
                <Li>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Users />
                        <p>Miembros</p>
                    </div>
                </Li>
                <Li>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Users />
                        <p>Miembros</p>
                    </div>
                </Li>
            </Ul>
        </Nav>
    )
}

export default Navbar;