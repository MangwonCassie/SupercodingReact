import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN =   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

console.log('token 확인용 2번 Parce', TOKEN);

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`},
});