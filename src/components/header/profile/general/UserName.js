import styled from "styled-components";

const UserName = styled.span`
    color: ${props => props.color ? props.color : "#333"};
    font-size: ${props => props.fontSize ? props.fontSize : ".9375rem"};
    margin: ${props => props.margin ? props.margin : "5px"};
    opacity: ${props => props.opacity ? props.opacity : null};
    border: ${props => props.border ? props.border : null};
    padding: ${props => props.padding ? props.padding : null};
`;

export default UserName;