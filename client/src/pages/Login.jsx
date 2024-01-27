import styled from "styled-components";
import {mobile} from "../responsive";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import {clearError} from "../redux/userRedux"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;

  &:disabled{
    color:green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`

//아이디 : admin, 비밀번호: admin

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const {isfetching, error} = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    //dispatch랑 user(username, password)
    login(dispatch, {username, password})

  }

  //로그인창 새로고침하면 비밀번호 이전에 틀렸을 때 비밀번호 틀렸다는 글귀 없애려고 추가
  useEffect(() => {
    return () => {
      // 언마운트 시 에러 초기화
      dispatch(clearError());
    };
  }, [dispatch]);


  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username"
          onChange={(e) => setUsername(e.target.value)} />
          <Input placeholder="password" type="password"
          onChange={(e) => setPassword(e.target.value) } />
          <Button onClick={handleClick} disabled={isfetching || error} >LOGIN</Button>
          {error && <Error>Something is wrong. Please recheck username and password</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
