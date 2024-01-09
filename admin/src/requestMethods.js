import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OGFmODM2MGQwMDlkYTRmOWYzMjNlMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMzgyMjIzOSwiZXhwIjo0ODU5NTgyMjM5fQ.BstxN-pJRzvdUKa-dzNnuKWygdEP1_kr6n6AY-1h5OA"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
});