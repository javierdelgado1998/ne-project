import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {BsLayoutSidebarInsetReverse, BsLayoutSidebarInset} from "react-icons/bs";

const Slider = styled.button`
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: 0;
    border: 0;
`;

const SliderActive = styled(BsLayoutSidebarInsetReverse)`
    width: 20px;
    height: 20px;
    color: #fff;
`;

const SliderInactive = styled(BsLayoutSidebarInset)`
    width: 20px;
    height: 20px;
    color: #fff;
`;

const SliderButton = () => {
    const [active, setActive] = useState(true);
    const dispatch = useDispatch();
    const toggleBar = () => {
        setActive(!active);
        dispatch({type: "TOGGLE_BAR"});
    };
    return (
        <Slider onClick={toggleBar}>
        {active ? <SliderActive /> : <SliderInactive />}
        </Slider>
    )
}

export default SliderButton;