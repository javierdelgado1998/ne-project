import { keyframes } from "styled-components";
import { css } from "styled-components";

const SlideIn = keyframes`
    from {
        margin-left: -100%;
    }
    to {
        margin-left: 0%;
    }
`;

const Slider = css`
    ${SlideIn} 0.2s ease 0s 1 normal;
`;

export default Slider;