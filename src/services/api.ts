import axios from "axios";

const url = `https://dk2lgg.csb.app/api`;

export const api = axios.create({
  baseURL: url
});
