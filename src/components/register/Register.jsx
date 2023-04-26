import React from 'react'
import './register.css'
import { useState } from "react";
import background from "../../images/background.jpg";
import { Link } from "react-router-dom";

import Switch from "react-switch";

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [check, setCheck] = useState(false);

  const handleData = () => {};
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
          <div className="right-message">
            <h1>Welcome!</h1>
            <p>Use these awesome forms to login or create new</p>
            <p>account in your project for me</p>
          </div>
          <div className='right-info'>

            <div className='direct-register'>
              <h3>Register with</h3>
              <div className='social-media'>
              <a href="#" class="fa fa-facebook"></a>
              <a href="#" class="fa fa-apple"></a>
              <a href="#" class="fa fa-google"></a>
              </div>

            </div>
            <div className="email inputs ">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              id="name"
              placeholder="Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
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
              autoComplete="off"
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
              SIGN UP
            </button>
          </div>

          <div className="login-register">
            <div>Don't Have Account ?</div>
            <Link to="/">
              <span>SignIn</span>
            </Link>
          </div>
          </div>
          </div>
          </div>
          </div>

  )
}

export default Register
