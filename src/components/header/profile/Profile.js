import { useContext } from "react";
import UserContext from "../../../context/user/UserContext";
import useModal from "../../../hooks/useModal";
import Modal from "../../modal/Modal";
import MyProfile from "./MyProfile";
import ButtonProfile from "./general/ButtonProfile";
import UserImage from "./general/UserImage";
import UserName from "./general/UserName";

const Profile = () => {
    const {user} = useContext(UserContext);
    const [isOpen, openModal, closeModal] = useModal();
    return (
        <>
            <ButtonProfile onClick={openModal}>
                <UserImage
                src={user.img}
                alt={`${user.firstname} ${user.lastname}`}
                />
            </ButtonProfile>
            <UserName color="#001036" margin="0">{`${user.firstname} ${user.lastname}`}</UserName>
            <Modal 
            isOpen={isOpen} 
            closeModal={closeModal} 
            clickOutside={true} 
            header={false} 
            closeButton={false} 
            padding="0" 
            boxShadow="none"
            height="350px"
            width="300px"
            top="72px"
            right="190px"
            position="absolute"
            >
                <MyProfile user={user} closeModal={closeModal}/>
            </Modal>
        </>
    )
}

export default Profile;