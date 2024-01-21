import axios from "axios";

const BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://mighty-waters-06853-0623ee72fb5f.herokuapp.com/' // 여기에 Heroku 주소
  : 'http://localhost:5000/api/'; // 로컬 개발 서버 주소

// 로컬 스토리지에서 데이터 가져오기
const storedData = localStorage.getItem("persist:root");

// 데이터가 존재하고, JSON 문자열이면 파싱
const parsedData = storedData ? JSON.parse(storedData) : null;

// 유효한 구조의 데이터인지 확인 후 accessToken 가져오기
const TOKEN = parsedData && parsedData.user && parsedData.user.currentUser
  ? parsedData.user.currentUser.accessToken
  : null;

// publicRequest는 별도의 헤더가 필요 없음
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

// userRequest는 헤더에 token을 설정
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {},
});
