import {ButtonBuyCheapest, Cards, Main} from "./styles/AppStyles";
import Modal from "./components/Modal/Modal";
import Form from "./components/Form/Form";
import {Card} from "./components/Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {setBuyModal} from "./redux/reducer";


function AppView() {
    const cards = useSelector((state)=>state.mainPage.cards)
    const modal = useSelector((state)=>state.mainPage.modal)
    const dispatch = useDispatch()
    return <Main>
        <Cards>
            {cards.map(card => <Card  key={card.name} card={card}/>)}
        </Cards>
        <ButtonBuyCheapest onClick={()=>dispatch(setBuyModal(true,cards.filter(card => card.price === Math.min(...cards.map(card => card.price)))[0]))}>Buy cheapest</ButtonBuyCheapest>
        {modal.on && <Modal children={<Form card={modal.card}/>}/>}
    </Main>
}

export default AppView