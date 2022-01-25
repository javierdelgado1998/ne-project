import styled from "styled-components";

const Button = styled.button`
    background: ${props => props.background ? props.background : "palevioletred"};
    color: ${props => props.color ? props.color : "white"};
    font-size: ${props => props.fontSize ? props.fontSize : "1em"};
    padding: ${props => props.padding ? props.padding : "0.25em 1em"};
    border: ${props => props.border ? props.border : "2px solid palevioletred"};
    border-radius: ${props => props.borderRadius ? props.borderRadius : "3px"};
    width: ${props => props.width ? props.width : null};
    box-shadow: ${props => props.boxShadow ? props.boxShadow : null};
    cursor: pointer;

    &:hover {
        background: ${props => props.hoverBackground ? props.hoverBackground : null};
        border: ${props => props.hoverBorder ? props.hoverBorder : "none"};
        box-shadow: ${props => props.hoverBoxShadow ? props.hoverBoxShadow : "none"};
        padding: ${props => props.hoverPadding ? props.hoverPadding : "0.25em 1em"}
    }
`

export default Button;