import {ButtonBuyCheapest, Cards, Main} from "./styles/AppStyles";
import Modal from "./components/Modal/Modal";
import Form from "./components/Form/Form";
import {Card} from "./components/Card/Card";
import {useSelector} from "react-redux";


function AppView() {
    const cards = useSelector((state)=>state.mainPage.cards)
    const modal = useSelector((state)=>state.mainPage.modal)
    return <Main>
        <Cards>
            {cards.map(card => <Card  key={card.name} card={card}/>)}
        </Cards>
        <ButtonBuyCheapest>Buy cheapest</ButtonBuyCheapest>
        {modal.on && <Modal children={<Form card={modal.card}/>}/>}
    </Main>
}

export default AppView