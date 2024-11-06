import React, { useState } from 'react';
import Rid from '../../assets/Rid.png';
// Import Bootstrap first // Import Bootstrap first
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    
    const handleLogin = (e) => {
        e.preventDefault();
        // Logic for login authentication
        console.log("Login clicked!", { username, password });
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <img src={Rid} alt="Logo" className="login-logo" />
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">Sign In</button>
                </form>
                <div className="signup-link">
                    <p>Don't have an account? <a href="/signup">Sign up here</a></p>
                </div>
            </div>
            {/*<div>
    <img src={Heart} alt="" />
    <span>
    <NumberCounter end={140} start={69} delay="3" preFix="+"/></span>
    <span>Heart Rate</span>
    </div>*/}
        </div>
         
    );
}

export default Login;
