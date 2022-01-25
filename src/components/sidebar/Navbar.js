import styled from "styled-components";

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
    padding: 10px;
`;

const Li = styled.li`
    background: #263544;
    list-style: none;
    color: #fff;
    margin: 30px;
    opacity: 1;
    cursor: pointer;
`;
const Navbar = () => {
    return (
        <Nav>
            <Ul>
                <Li>Miembros</Li>
                <Li>Iglesias</Li>
                <Li>Eventos</Li>
                <Li>Secretaria</Li>
                <Li>Tesoreria</Li>
            </Ul>
        </Nav>
    )
}

export default Navbar;