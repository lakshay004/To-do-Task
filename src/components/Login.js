import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/action/authActions';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLogin = () => {
        if (username.trim()) {
            dispatch(login(username,password));
        }
    };

    return (
        <div className="login-container">
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="login-input"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="login-input"
                required
            />
            <button onClick={() => handleLogin()} className="login-button">Login</button>
        </div>
    );
};

export default Login;
