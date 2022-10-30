import {useForm} from "react-hook-form";
import {Button, Category, Dollar, Name, Price, PriceGroup} from "../Product/ProductStyles";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  margin-top: 30px;
`

const FormButton = styled(Button)`
  width: 125px;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

const Input = styled.input`
  font-size: 30px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  padding: 15px;
`

const FormView = ({card}) => {
    const {register, handleSubmit} = useForm()

    const onSubmit = data => {
        console.log(`
            Mr/Mrs ${data.name}
            Number ${data.number}
            Make an order for ${card.name}
        `)

    }

    return <Container>
        <div>
            <Category>{card.category}</Category>
            <Name>{card.name}</Name>
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