import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/apiCalls';



const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch(); //to be able to use actions im apiCalls.

    const handleClick = (e) => {
        e.preventDefault();
        //redux toolkit 쓸 예정
        login(dispatch, { username, password });
    }
    return (
        <div style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems:"center",
            justifyContent:"center",
        }}>
            <input type="text" placeholder="username" onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
            <button onClick={handleClick}> Login</button>
        </div>
    );
};

export default Login;