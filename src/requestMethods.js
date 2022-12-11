import axios from "axios";
const BASE_URL = "http://localhost:5000/e-mart/";

const user = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user);
const currentUser = user.currentUser;
const TOKEN = currentUser?.accessToken;
// console.log(TOKEN);
// const TOKEN = "abc";
/* const TOKEN =
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).currentUser)
    .accessToken || "abc"; */

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
