import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../shared";

export default function Home() {
  return (
    <Container>
      <h1>Welcome to RepoProvas</h1>
      <Box>
        <Link>
          <button>Send a test</button>
        </Link>
        <Link>
          <button>View a test</button>
        </Link>
      </Box>
    </Container>
  );
}

const Box = styled.div`
  margin-top: 30px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
