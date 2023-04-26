import React, { useState } from "react";
import logo from "../../images/logo.png";
import background from "../../images/background.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import "./login.css";
import Switch from "react-switch";
import { url } from "../../data/data";

const LogIn = ({setUser}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();

  const handleData = async (e) => {
    try {
      const data = new FormData();
      data.append('email', email);
      data.append('password', password);
      let response = await axios.post(`${url}/leads/api/api_login/`, data)
      response = response.data;
      
      if(response.response_code == 200){
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data))
        navigate('/dashboard')

      }
    
    } catch (error) {
      console.log('Error happing submitting form', error)
    }
  };

  return (
    <div className="container login">
      <div className="login-details">
        <div className="left" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="left-title">
          <h3>INSPIRED BY THE FUTURE:</h3>
          <h1>THE VISION UI DASHBOARD</h1>
        </div>
        </div>
        <div className="right">
          <div className="message">
            <h1>Nice to see you!</h1>
            <p>Enter your email and password to signin</p>
          </div>

   
          <div className="email inputs ">
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              name="email"
              value={email}
              id="email"
              placeholder="Email address"
              required
              autocomplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="password inputs">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Password"
              required
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="remember">
            <Switch checked = {check} onChange={() => setCheck(!check)} onColor = '#571AE8' uncheckedIcon= {false} checkedIcon ={false} height={25}/>
            <span>Remember Me</span>
          </div>

          <div className="submit">
            <button type="submit" onClick={handleData}>
              SIGN IN
            </button>
          </div>

          <div className="login-register">
            <div>Don't Have Account ?</div>
            <Link to="/register">
              <span>Sign up</span>
            </Link>
          </div>

          <div className="login-register">

            <Link to="/email">
              <div className="forgot">Forgot Password?</div>
            </Link>
          </div>

          <div className="footer-message">
            <div>@2021, Made with ❤️ by Simmmple & Creative Tim for a better web</div>
            <div className="footer-message-tag">
              <span>Marketplace</span>
              <span>Blog</span>
              <span>Licence</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
