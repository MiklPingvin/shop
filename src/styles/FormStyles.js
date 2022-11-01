import styled from "styled-components";
import {Button, Name} from "./Styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  margin-top: 30px;
`
export const FormButton = styled(Button)`
  width: 125px;
`
export const FormName = styled(Name)`
  font-size: 40px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
export const Input = styled.input`
  font-size: 14px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 12px;
`