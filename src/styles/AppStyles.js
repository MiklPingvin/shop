import styled from "styled-components";
import {Button} from "./Styles";

export const Cards = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;


`
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  
  width: 100vw;
  min-width: 750px;
  height: 100vh;
  
  
  background-color: #E5E5E5;

`
export const ButtonBuyCheapest = styled(Button)`
  font-size: 12px;
  width: 100px;
`