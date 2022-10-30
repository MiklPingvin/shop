import {Button, Card, Category, Dollar, Name, Price, PriceGroup, PriceGroupWithButton} from "./ProductStyles";


const ProductView = ({name, category, price}) => {
    return <Card>
        <div>
            <Category>{category}</Category>
            <Name>{name}</Name>
        </div>
        <PriceGroupWithButton>
            <PriceGroup>
                <Dollar>$</Dollar>
                <Price>{price}</Price>
            </PriceGroup>
            <Button>BUY</Button>
        </PriceGroupWithButton>
    </Card>
}
export default ProductView