import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container } from "../shared";
import { getProfessors } from "../service/api";

export default function Professors() {
  const [professors, setProfessors] = useState(null);
  useEffect(() => {
    getProfessors()
      .then((res) => {
        setProfessors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(professors);
  return (
    <Container>
      <h1>Professores</h1>

      {professors
        ? professors.map((item) => (
            <Link
              to={"/professores/" + item.id}
              style={{ textDecoration: "none" }}
            >
              <Box>
                <Name>{item.name}</Name>
                <Qtd>{item.qtd}</Qtd>
              </Box>
            </Link>
          ))
        : ""}
    </Container>
  );
}

const Box = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 5px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 30px;
`;

const Name = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #262626;
  margin-bottom: 10px;
`;

const Qtd = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #262626;
`;
