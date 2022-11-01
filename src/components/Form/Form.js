import {useForm} from "react-hook-form";
import {PriceGroup} from "../../styles/CardStyles";
import {Category, Dollar, Price} from "../../styles/Styles";
import {Container, ErrorMassage, Form, FormButton, FormName, Input} from "../../styles/FormStyles";


const FormView = ({card}) => {
    const {register, handleSubmit,reset, formState: {errors}} = useForm({
        mode: "onChange",
        reValidateMode: "onBlur"
    })

    const onSubmit = (data) => {
        console.log(`
            Mr/Mrs ${data.name}
            Number ${data.number}
            Make an order for ${card.name}
        `)
        reset()
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
            <div><Input {...register('name', {
                required: 'This field in required',
                pattern: {
                    value: /^[a-zA-Zа-яА-Я]+$/,
                    message: 'Only letters allowed'
                }
            })} type="text" placeholder={'Name'}/>
                {errors.name && <ErrorMassage>{errors.name.message}</ErrorMassage>}
            </div>
            <div><Input {...register('number', {
                required: 'This field in required',
                pattern: {
                    value: /^[0-9]{0,12}$/,
                    message: 'Only numbers allowed'
                },
                maxLength: {
                    value: 12,
                    message: "Should contain 12 characters"
                }
            })} type="text" placeholder={'Number'}/>
                {errors.number && <ErrorMassage>{errors.number.message}</ErrorMassage>}
            </div>
            <FormButton>ORDER</FormButton>
        </Form>
    </Container>
}

export default FormView