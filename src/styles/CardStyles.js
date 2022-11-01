import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  
  padding: 20px;
  margin: 16px;
  
  width: 176px;
  height: 135px;

  background: #FFFFFF;
  border-radius: 24px;
`

export const PriceGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  `


export const PriceGroupWithButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`