import React from 'react';
import {useState} from 'react';
import {useNavigate,Link} from 'react-router-dom';    
import './Login.css'

function Login({setLoggedIn,setUser}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email && password){
            setLoggedIn(true);
            Navigation('/');
           setUser(email);
        }
       
    };

    return (
        <div className="login">
            <div className="login-container">
                <h2 className="login-title">Login to Pharmacare</h2>
                <form onSubmit={handleSubmit} className="login-form">
                <input className="login-input" required
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input className="login-input" required
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="login-button">Login</button>
            </form>
            <p className="login-switch">
                Don't have an account? <Link to="/signup" className="login-link">Sign Up</Link>
            </p>
            </div>
        </div>
    );          
};

export default Login;
