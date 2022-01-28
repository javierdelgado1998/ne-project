import styled from "styled-components";

const Container = styled.div`
  display: ${props => props.display ? props.display : "flex"};
  justify-content: ${props => props.justifyContent ? props.justifyContent : "center"};
  height: ${props => props.height ? props.height : "100%"};
  align-items: ${props => props.alignItems ? props.alignItems : "center"};
  flex-direction: ${props => props.direction ? props.direction : "row"};
  background: ${props => props.background ? props.background : null};
  width: ${props => props.width ? props.width : "100%"};
  margin: ${props => props.margin ? props.margin : null};
  position: ${props => props.position ? props.position : null};
  top: ${props => props.top ? props.top : null};
  right: ${props => props.right ? props.right : null};
  left: ${props => props.left ? props.left : null};
  bottom: ${props => props.bottom ? props.bottom : null};
  overflow-x: ${props => props.overflowX ? props.overflowX : null};
  overflow-y: ${props => props.overflowY ? props.overflowY : null};
  padding: ${props => props.padding ? props.padding : null};
  animation: ${props => props.animation ? props.animation : null};
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #17555D;
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  
`;

export default Container;