import Container from "../general/Container";
import { useSelector } from "react-redux";

const Pages = ({children}) => {
    const state = useSelector(state => state);
    return (
        <Container width="100%" margin={state ? "146px 0px 0px 300px" : "146px 0px 0px 0px"}>
            {children}
        </Container>
    )
}

export default Pages;