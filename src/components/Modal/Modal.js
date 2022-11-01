import React from "react";
import {Container, Content} from "../../styles/ModalStyles";


const Modal =({active,setActive,children})=>{
    return(
        <Container onClick={()=>{setActive(false)}}>
            <Content onClick={e=>{e.stopPropagation()}}>
                {children}
            </Content>
        </Container>
    )
}
export default Modal