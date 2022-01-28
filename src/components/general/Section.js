import styled from "styled-components";

const Section = styled.div`
    background: ${props => props.background ? props.background : "#fff"};
    display: ${props => props.display ? props.display : "block"};
    flex-direction: ${props => props.direction ? props.direction : null};
    justify-content: ${props => props.justifyContent ? props.justifyContent : null};
    align-items: ${props => props.alignItems ? props.alignItems : null};
    border: ${props => props.border ? props.border : null};
    padding: ${props => props.padding ? props.padding : "20px 25px"};
    width: ${props => props.width ? props.width : "500px"};
    box-shadow: ${props => props.boxShadow ? props.boxShadow : "0px 2px 3px rgb(0,0,0,0.3)"};
`;

export default Section;