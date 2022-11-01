import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  opacity: 1;
  pointer-events: all;
  z-index: 2;
`
export const Content = styled.div`
  padding: 20px;
  border-radius: 60px;
  background-color: white;
  width: 300px;
  transition: 0.4s all;
  transform: scale(1);
  z-index: 1;
`