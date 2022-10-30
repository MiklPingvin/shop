import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  padding: 16px;
  width: 64px;
  height: 56px;
  
  font-family: sans-serif;
  font-size: 15px;
  
  
  background: #4BCFA0;
  border-radius: 16px;
  border-color: #4BCFA0;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  
  padding: 32px;
  margin: 32px;
  
  width: 352px;
  height: 256px;

  background: #FFFFFF;
  border-radius: 24px;
`
export const Category = styled.div`
  width: 59px;
  height: 24px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height, or 150% */

  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: #000000;

  opacity: 0.5;
`
export const PriceGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`
export const Name = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 48px;
  /* identical to box height, or 120% */

  letter-spacing: -0.02em;
  color: #000000;
`
export const Price = styled.div`
  font-family: 'Roboto', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 72px;
  /* identical to box height, or 120% */

  letter-spacing: -0.02em;

  color: #000000;
`
export const Dollar = styled.div`
  font-family: 'Roboto', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 35px;
  letter-spacing: -0.02em;


`
export const PriceGroupWithButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`