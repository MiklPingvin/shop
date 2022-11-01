import {useForm} from "react-hook-form";
import {PriceGroup} from "../../styles/CardStyles";
import {Category, Dollar, Price} from "../../styles/Styles";
import {Container, Form, FormButton, FormName, Input} from "../../styles/FormStyles";


const FormView = ({card}) => {
    const {register, handleSubmit} = useForm()

    const onSubmit = (data,event) => {
        console.log(`
            Mr/Mrs ${data.name}
            Number ${data.number}
            Make an order for ${card.name}
        `)
        event.target.reset()
    }

    return <Container>
        <div>
            <Category>{card.category}</Category>
            <FormName>{card.name}</FormName>
        </div>
        <PriceGroup>
            <Dollar>$</Dollar>
            <Price>{card.price}</Price>
        </PriceGroup>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register('name')} type="text" placeholder={'Name'}/>
            <Input {...register('number')} type="text" placeholder={'Number'}/>
            <FormButton>ORDER</FormButton>
        </Form>
    </Container>
}

export default FormView