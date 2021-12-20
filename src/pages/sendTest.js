import { Container } from "../shared";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
import {
  getCategories,
  getProfessors,
  getSubjects,
  postTest,
} from "../service/api";

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

  function sendExam(e) {
    e.preventDefault();
    setLoading(true);
    const body = {
      name,
      category,
      subject,
      professor,
      pdfLink,
    };

    postTest(body)
      .then((res) => {
        history.push("/");
        setLoading(false);
      })
      .catch((err) => {
        alert("Erro ao obter categorias");
        setLoading(false);
      });
  }

  return (
    <Container>
      <h1>Enter your test information</h1>
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
    margin-top: 10px;
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
    margin-top: 10px;
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
    input,
    form {
      width: 100%;
    }
    select {
      width: 195px;
    }
    button {
      width: 195px;
    }
  }
`;
