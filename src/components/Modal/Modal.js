import React from "react";
import {Container, Content} from "../../styles/ModalStyles";
import {useDispatch} from "react-redux";
import {setBuyModal} from "../../redux/reducer";


const Modal = ({children}) => {
    const dispatch = useDispatch()
    return (
        <Container onClick={() => {
            dispatch(setBuyModal(false))
        }}>
            <Content onClick={e => {
                e.stopPropagation()
            }}>
                {children}
            </Content>
        </Container>
    )
}
export default Modal