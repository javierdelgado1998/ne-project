import styled from "styled-components";

const Container = styled.div`
  display: ${props => props.display ? props.display : "flex"};
  justify-content: ${props => props.justifyContent ? props.justifyContent : "center"};
  height: 100%;
  align-items: ${props => props.alignItems ? props.alignItems : "center"};
  flex-direction: ${props => props.direction ? props.direction : "row"};
  background: ${props => props.background ? props.background : null};
  width: ${props => props.width ? props.width : null};
`;

export default Container;