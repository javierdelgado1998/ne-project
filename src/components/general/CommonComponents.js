import styled, { css } from "styled-components";

export const Container = styled.div`
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
  ${({theme, main}) => main && css`
    & {
        background-color: ${theme.palette.background};
    }
  `}
`;

export const Section = styled.div`
    background: ${props => props.background ? props.background : null};
    display: ${props => props.display ? props.display : "block"};
    flex-direction: ${props => props.direction ? props.direction : null};
    justify-content: ${props => props.justifyContent ? props.justifyContent : null};
    align-items: ${props => props.alignItems ? props.alignItems : null};
    border: ${props => props.border ? props.border : null};
    padding: ${props => props.padding ? props.padding : "20px 25px"};
    width: ${props => props.width ? props.width : "500px"};
    box-shadow: ${props => props.boxShadow ? props.boxShadow : "0px 2px 3px rgb(0,0,0,0.3)"};
    flex-direction: ${props => props.direction ? props.direction : null};
    height: ${props => props.height ? props.height : null};
`;

export const TitleSection = styled.h2`
  font-size: 5rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  line-height: 6.313rem;
  margin-bottom: 4rem;
  ${({ primary, theme }) => primary && css`
    & {
      color: ${theme.palette.primary}
    }
  `}
  ${({ secondary, theme }) => secondary && css`
    & {
      color: ${theme.palette.secondary}
    }
  `}
  @media(max-width: 960px) {
    font-size: 4rem;
    margin-bottom: 1rem;
  }
  @media(max-width: 767px) {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
`;

export const ImageCommon = styled.img`
    border: ${props => props.border ? props.border : "2px solid #fff"};
    box-shadow: 0 5px 10px 0 rgb(43 43 43 / 20%);
    vertical-align: middle;
    width: ${props => props.width ? props.width : "40px"};
    height: ${props => props.height ? props.height : null};
    padding: ${props => props.padding ? props.padding : null};
    margin: ${props => props.margin ? props.margin : null};
    ${({circle}) => circle && css`
        & {
            border-radius: 50%;
        }
    `}
`;

export const SmallButton = css`
  & {
    padding: 0.5rem 2rem;
    font-size: ${({ theme }) => theme.size.sm};
  }
`;

export const MediumButton = css`
  & {
    padding: 0.5rem 2rem;
    font-size: ${({ theme }) => theme.size.md};
  }
`;

export const BtnPrimaryLinkSm = styled.a`
  ${PrimaryButton};
  ${SmallButton};
  display: flex;
  align-items: center;
  svg {
    margin-left: 0.5rem;
  }
`;

export const BtnPrimaryLinkMd = styled.a`
  ${PrimaryButton};
  ${MediumButton};
  display: flex;
  align-items: center;
  svg {
    margin-left: 0.5rem;
  }
`;

export const BtnSecondarySm = styled.a`
  ${SecondaryButton};
  ${SmallButton};
  display: flex;
  align-items: center;
  svg {
    margin-left: 0.5rem;
  }
`;

export const BtnSecondaryMd = styled.a`
  ${SecondaryButton};
  ${MediumButton};
  display: flex;
  align-items: center;
  svg {
    margin-left: 0.5rem;
  }
`;

export const SecondaryButton = css`
  & {
    background-color: transparent;
    border-color: ${({ theme }) => theme.palette.primary};
    color: ${({ theme }) => theme.palette.primary};
    cursor: pointer;
    border-radius: 3rem;
    border-style: solid;
    border-width: 3px;
    display: inline-flex;
    font-family: ${({ theme }) => theme.fonts[0]};
    font-weight: 700;
    letter-spacing: 0.05rem;
    overflow: hidden;
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
    white-space: nowrap;
  }
`;

export const PrimaryButton = css`
  & {
    background-color: ${({ theme }) => theme.palette.secondary};
    border-color: ${({ theme }) => theme.palette.secondary};
    border-radius: 3rem;
    border-style: solid;
    border-width: 3px;
    color: ${({ theme }) => theme.palette.textDark};
    display: inline-flex;
    font-family: ${({ theme }) => theme.fonts[0]};
    font-weight: 700;
    letter-spacing: 0.05rem;
    overflow: hidden;
    position: relative;
    transition: border-color 0.3s ease;
    z-index: 1;
    white-space: nowrap;
  }
`;

export const GeneralButton = styled.button`
  outline: 0;
  border: 0;
  cursor: pointer;
  background: ${props.background ? props.background : "transparent"};
  ${({ primary, theme }) => primary && css`
    & {
      color: ${theme.palette.primary}
    }
  `}
  ${({ secondary, theme }) => secondary && css`
    & {
      color: ${theme.palette.secondary}
    }
  `}
`;