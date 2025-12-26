import React from 'react';
import {useNavigate,Link,usestate} from 'react-router-dom';
import{usestate} from 'react';
import './Signup.css';

function signup() {
    const Signup=({setLoggedIn,setUser})=>{
        const[name,setName]=useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();         
        if(name &&email && password){
              setUser(name);
              setLoggedIn(true);
              Navigate('/');

    } }; 
    }
    return (
    <div className="signup">
        <div className="signup-container">
            <h2 className="signup-title">Sign Up to Pharmacare</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <input className="signup-input" required
                    type="text"
                    placeholder=" Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />  
                <input className="signup-input" required
                    type="email"
                    placeholder="Email"         
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />  
                <input className="signup-input" required
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="signup-button">Sign Up</button>
            </form>
            <p className="login-switch">
                Don't have an account? <Link to="/login" className="login-link">Sign Up</Link>
            </p>
        </div>
        </div>
    ); 
};

export default signup;
