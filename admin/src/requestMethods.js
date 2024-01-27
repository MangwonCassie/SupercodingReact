import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN =   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

console.log("admin 디버깅 테스트, TOKEN", TOKEN);

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`},
});