import styled from "styled-components";
import { useField } from "formik";
import Section from "../Section";
import { useEffect, useRef } from "react";
import {RiAlertFill} from "react-icons/ri";

const style = {
    icon: {
        marginLeft: "5px",
        color: "red",
        height: "25px",
        width: "25px",
    }
}

const Control = styled.div`
    margin-bottom: 20px;
    width: 100%;
`;

const Label = styled.label`
    color: #000;
    display: block;
    margin-bottom: 5px;
`;

const MyInput = styled.input`
    outline: none;
    padding: 8px;
    border: solid 1px #b1b3b5;
    width: 100%;
    margin-bottom: 5px;
    height: 40px;
    &:focus {
        border-color: ${props => props.focusColor};
    }
`;

const ErrorMessage = styled.div`
    color: #f00;
`;

const Input = ({label, children, ...props}) => {
    const [field, meta] = useField(props);
    const ref = useRef();
    useEffect(() => {
        if(meta.touched && meta.error) {
            ref.current.focus();
        }
    }, [meta.touched, meta.error])
    return (
        <Control>
            <Label>{label}</Label>
            <Section padding="0" boxShadow="none" width="100%" display="flex" alignItems="flex-start" direction="column">
                <Section padding="0" boxShadow="none" width="100%" display="flex" alignItems="center">
                    {children}
                    <MyInput ref={ref} focusColor={meta.touched && meta.error ? "#f00" : "#61ccff"} {...field} {...props} />
                    {meta.touched && meta.error ? (<RiAlertFill style={style.icon} />) : null}
                </Section>
                {meta.touched && meta.error ? (<ErrorMessage>{meta.error}</ErrorMessage>) : null}
            </Section>
        </Control>
    )
}

export default Input;