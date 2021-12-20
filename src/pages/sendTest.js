import { Container } from "../shared";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
import { getCategories, getProfessors, getSubjects } from "../service/api";

export default function SendTest() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [pdfLink, setPdfLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState(null);
  const [subjects, setSubjects] = useState(null);
  const [professors, setProfessors] = useState(null);
  const [category, setCategory] = useState("");
  const [subject, setSubject] = useState("");
  const [professor, setProfessor] = useState("");

  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        alert("Erro ao obter categorias");
      });

    getSubjects()
      .then((res) => {
        setSubjects(res.data);
      })
      .catch((err) => {
        alert("Erro ao obter categorias");
      });

    getProfessors()
      .then((res) => {
        setProfessors(res.data);
      })
      .catch((err) => {
        alert("Erro ao obter categorias");
      });
  }, []);

  console.log(categories);
  console.log(subjects);
  console.log(professors);
  function sendExam(e) {
    e.preventDefault();
    console.log(category);
  }

  console.log(category);
  console.log(subject);
  console.log(professor);

  return (
    <Container>
      <Title>Insira as informações da sua prova:</Title>
      <Box>
        <form onSubmit={(event) => sendExam(event)}>
          <input
            placeholder="Name"
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select
            name="category"
            defaultValue={"DEFAULT"}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories
              ? categories.map((category, index) => (
                  <option key={index} value={category.id}>
                    {category.name}
                  </option>
                ))
              : ""}
          </select>
          <select
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            {subjects
              ? subjects.map((subject, index) => (
                  <option key={index} value={subject.id}>
                    {subject.name}
                  </option>
                ))
              : ""}
          </select>

          <select
            defaultValue={"DEFAULT"}
            value={professor}
            onChange={(e) => setProfessor(e.target.value)}
          >
            {professors
              ? professors.map((professor, index) => (
                  <option key={index} value={professor.id}>
                    {professor.name}
                  </option>
                ))
              : ""}
          </select>

          <input
            type="text"
            name="pdfLink"
            placeholder="Link do pdf"
            value={pdfLink}
            onChange={(e) => setPdfLink(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? (
              <Loader type="ThreeDots" color="#FFFFFF" height={13} width={80} />
            ) : (
              "Enviar"
            )}
          </button>
        </form>
      </Box>
    </Container>
  );
}

const Title = styled.div`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  text-align: center;
  line-height: 30px;
  color: #000000;
  margin-bottom: 40px;
`;

const Box = styled.div`
  width: 50%;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 420px;
  }
  input {
    max-width: 100%;
    height: 60px;
    border: none;
    padding: 18px 0 18px 15px;
    font-family: "Raleway", sans-serif;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    border-radius: 5px;
  }
  button {
    width: 100%;
    height: 60px;
    border: none;
    color: #ffffff;
    padding: 18px 0 18px 15px;
    font-family: "Raleway", sans-serif;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    background: #000000;
    border-radius: 5px;
    margin-top: 10px;
  }
  select {
    width: 100%;
    height: 60px;
    background: white;
    border: none;
    padding: 18px 0 18px 15px;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    border-radius: 5px;
  }
  @media (max-width: 600px) {
    input {
      width: 100%;
    }
    form {
      width: 100%;
      background-color: red;
    }

    select {
      width: 100vw;
      width: 195px;
    }
    button {
      width: 195px;
    }
  }
`;
