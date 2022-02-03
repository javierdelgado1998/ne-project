import styled from "styled-components";

const ButtonProfile = styled.button`
    outline: 0;
    border: 0;
    margin: ${props => props.margin ? props.margin : "0 10px 0 0"};
    padding: 0;
    cursor: pointer;
    background: transparent;
    width: ${props => props.width ? props.width : null};
    height: ${props => props.height ? props.height : null};
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export default ButtonProfile;
