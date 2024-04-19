import React, { useState } from 'react';
import { useRouter } from 'next/router';
import './signup.css'
import '../pages/index.js';



const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  

  const signUpHandler = () => {
    if (username != undefined && password != undefined) {
        router.push('/');
      } else {
        alert('Invalid Username or Password');
      }
  };

  return (
    <div className = "Hero">
      <header className="app-header">
        <h1 className="app-title">WiseWallet</h1>
        <p className="app-subtitle">Expense Tracker</p>
      </header>
      <h1>Create an account</h1>
      <div className="container">
          <form>
            <div className= 'form-group'>
              <label for="name">Name:</label>
              <input type="text" placeholder="Your Name" required/>
            </div>
            <div className= 'form-group'>
              <label for="username">Username:</label>
              <input type="text" placeholder="Username" required/>
            </div>
            <div className= 'form-group'>
              <label for="email">Email:</label>
              <input type="email" placeholder="Your email id" required/>
            </div>
            <div className= 'form-group'>
              <label for="password">Create Password:</label>
              <input type="password" placeholder="Password" required/>
            </div>
            <div className= 'form-group'>
              <label for="terms">I accept the terms and conditions</label>
              <input type="checkbox" id="terms"></input>
            </div>
            <button onClick={signUpHandler}>Sign Up</button>
          </form>
      </div>
    </div>
  );
};

export default SignUpPage;