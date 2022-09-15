import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/",
  headers: {},
});
 
const order = axios.create({
  baseURL: "http://localhost:5000/api/",
  headers: {},
});
 

const api_test = axios.create({
  baseURL: "http://localhost:5000/api/",
  headers: {},
});

export {api,api_test,order};
