import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../shared";

export default function ChooseForm() {
  return (
    <Container>
      <h1>Order by</h1>
      <Box>
        <Link to="/professors">
          <button>Professors</button>
        </Link>
        <Link to="/view-test">
          <button>Subjects</button>
        </Link>
      </Box>
    </Container>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 30px;
  height: 140px;
  button {
    width: 350px;
    height: 60px;
    background: #000000;
    border-radius: 5px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.4);
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 23px;
    color: #ffffff;
    border-radius: 5px;
    border: none;
  }
`;
