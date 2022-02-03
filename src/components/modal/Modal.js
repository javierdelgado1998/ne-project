import {FaWindowClose} from "react-icons/fa";
import styled from "styled-components";
import { useRef } from "react";

const IconClose = styled(FaWindowClose)`
    width: 100%;
    height: 100%;
`;
const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalContainer = styled.div`
    width: ${props => props.width ? props.width : "500px"};
    height: ${props => props.height ? props.height : "600px"};
    background: ${props => props.background ? props.background : "#fff"};
    position: ${props => props.position ? props.position : "relative"};
    border-radius: ${props => props.borderRadius ? props.borderRadius : "5px"};
    box-shadow: ${props => props.boxShadow ? props.boxShadow : "rgba(100,100,111,0.2) 0px 7px 29px 0px"};
    padding: ${props => props.padding ? props.padding : "20px"};
    top: ${props => props.top ? props.top : null};
    right: ${props => props.right ? props.right : null};
    left: ${props => props.left ? props.left : null};
    bottom: ${props => props.bottom ? props.bottom : null};
`;

const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;
    h3 {
      font-weight: 500;
      font-size: 16px;
      color: #1766DC;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 15px;
    right: 20px;
    width: 30px;
    height: 30px;
    border: none;
    outline: 0;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: #1766DC;

    &:hover {
      background: #f2f2f2;
    }
`;

const Modal = ({
    isOpen,
    closeModal, 
    children, 
    clickOutside = false, 
    title = "", 
    header = true, 
    closeButton = true,
    width,
    height,
    borderRadius,
    padding,
    boxShadow,
    left,
    top,
    right,
    bottom,
    position
    }) => {
    const ref = useRef();
    const handleClickOutside = (e) => {
      if(ref.current && !ref.current.contains(e.target)) {
        closeModal();
      }
    }
    return (
      <>
        {isOpen &&
          <Overlay onClick={clickOutside && handleClickOutside}>
            <ModalContainer 
            ref={ref} 
            width={width} 
            height={height} 
            borderRadius={borderRadius} 
            padding={padding} 
            boxShadow={boxShadow}
            top={top}
            right={right}
            left={left}
            bottom={bottom}
            position={position}
            >
              {header &&
                <ModalHeader>
                  <h3>{title}</h3>
                </ModalHeader>
              }
              { closeButton &&
                <CloseButton onClick={closeModal}>
                  <IconClose />
                </CloseButton>
              } 
              {children}
            </ModalContainer>
          </Overlay>
        }
      </>
    );
};

export default Modal;
