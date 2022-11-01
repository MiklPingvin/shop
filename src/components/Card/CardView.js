import {Container, PriceGroup, PriceGroupWithButton} from "../../styles/CardStyles";
import {Button, Category, Dollar, Name, Price} from "../../styles/Styles";
import {setBuyModal} from "../../redux/reducer";


const CardView = ({name, category, price,dispatch}) => {

    return <Container>
        <div>
            <Category>{category}</Category>
            <Name>{name}</Name>
        </div>
        <PriceGroupWithButton>
            <PriceGroup>
                <Dollar>$</Dollar>
                <Price>{price}</Price>
            </PriceGroup>
            <Button onClick={()=>dispatch(setBuyModal(true))}>BUY</Button>
        </PriceGroupWithButton>
    </Container>
}
export default CardView