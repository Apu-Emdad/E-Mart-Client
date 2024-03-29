import axios from "axios";
// const BASE_URL = "http://localhost:5000/e-mart/";
const BASE_URL = "https://server-e-mart.vercel.app/e-mart/";

const user = localStorage.getItem("persist:root")
  ? JSON.parse(localStorage.getItem("persist:root"))?.user
  : null;
const currentUser = user && JSON.parse(user).currentUser;
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
