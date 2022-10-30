import ProductView from "./components/Product/ProductView";
import styled from "styled-components";

const Cards = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 100px;


`
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  

  width: 100vw;
  height: 100vh;

  background-color: #E5E5E5;

`
const ButtonBuyCheapest = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 16px;

  font-family: sans-serif;
  font-size: 25px;


  background: #4BCFA0;
  border-radius: 16px;
  border-color: #4BCFA0;
`


function AppView({cards}) {
    return <Main>
        <Cards>
            {cards.map(card => <ProductView name={card.name} category={card.category} price={card.price}/>)}
        </Cards>;
        <ButtonBuyCheapest>Buy cheapest</ButtonBuyCheapest>
    </Main>
}

export default AppView