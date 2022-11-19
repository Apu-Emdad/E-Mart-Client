import axios from "axios";
const BASE_URL = "http://localhost:5000/e-mart/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2Y0OWY0NjRiNzg3MmMwM2RmNDkxMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODgwNjI1NywiZXhwIjoxNjcxMzk4MjU3fQ.fpQ37cSLMPQi1uNcbLh5MFi7VP7pYEhJ2z8zDI3PG_k";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
