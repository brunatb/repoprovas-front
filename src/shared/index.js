import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #4f4f4f, black);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  overflow: hidden;
  overflow-y: scroll;
  font-family: Roboto;
  h1 {
    font-weight: 700;
    color: #00bfff;
    font-size: 100px;
    margin-top: 200px;
    margin-bottom: 50px;
  }
`;

export { Container };
