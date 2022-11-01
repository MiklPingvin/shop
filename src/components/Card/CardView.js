import {Container, PriceGroup, PriceGroupWithButton} from "../../styles/CardStyles";
import {Button, Category, Dollar, Name, Price} from "../../styles/Styles";
import {setBuyModal} from "../../redux/reducer";


const CardView = ({card,dispatch}) => {

    return <Container>
        <div>
            <Category>{card.category}</Category>
            <Name>{card.name}</Name>
        </div>
        <PriceGroupWithButton>
            <PriceGroup>
                <Dollar>$</Dollar>
                <Price>{card.price}</Price>
            </PriceGroup>
            <Button onClick={()=>dispatch(setBuyModal(true,card))}>BUY</Button>
        </PriceGroupWithButton>
    </Container>
}
export default CardView