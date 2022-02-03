import styled from "styled-components";

const UserImage = styled.img`
    border-radius: ${props => props.borderRadius ? props.borderRadius : "50%"};
    border: ${props => props.border ? props.border : "2px solid #fff"};
    box-shadow: 0 5px 10px 0 rgb(43 43 43 / 20%);
    vertical-align: middle;
    width: ${props => props.width ? props.width : "40px"};
    height: ${props => props.height ? props.height : null};
`;

export default UserImage;