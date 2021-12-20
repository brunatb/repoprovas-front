import axios from "axios";

const BASE_URL = "http://localhost:4000";

function getCategories() {
  return axios.get(`${BASE_URL}/categories`);
}

function getProfessors() {
  return axios.get(`${BASE_URL}/professors`);
}

function postTest(body) {
  return axios.post(`${BASE_URL}/test`, body);
}

function getSubjects() {
  return axios.get(`${BASE_URL}/subjects`);
}

export { getCategories, getProfessors, postTest, getSubjects };
