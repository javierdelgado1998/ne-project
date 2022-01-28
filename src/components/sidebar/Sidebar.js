import Container from "../general/Container";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import Slider from "../../styles/animations/Slider"

const SideBar = () => {
    const state = useSelector(state => state);
    return (
        <Container 
        direction="column" 
        justifyContent="flex-start" 
        background="#263544" 
        width="300px" 
        position="fixed"
        top="70px"
        left={!state ? "-100%" : "0"}
        overflowY="scroll"
        animation={state ? Slider : null}
        >
            <Navbar />
        </Container>
    )
}

export default SideBar;