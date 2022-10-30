import ProductView from "./components/Product/ProductView";
import {ButtonBuyCheapest, Cards, Main} from "./AppStyles";
import Modal from "./components/Modal/Modal";
import Form from "./components/Form/Form";


function AppView({cards, modal}) {
    return <Main>
        <Cards>
            {cards.map(card => <ProductView name={card.name} category={card.category} price={card.price}/>)}
        </Cards>;
        <ButtonBuyCheapest>Buy cheapest</ButtonBuyCheapest>
        {modal.on && <Modal children={<Form card={modal.card}/>}/>}
    </Main>
}

export default AppView