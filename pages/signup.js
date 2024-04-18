import React, { useState } from 'react';
import { useRouter } from 'next/router';
import '../src/app/globals.css';
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
      <h1>Create an account</h1>
      <div className="signup-box">
            <form>
                <input type="text" placeholder="Your Name" required/>
                <input type="text" placeholder="Username" required/>
                <input type="email" placeholder="Your email id" required/>
                <input type="password" placeholder="Create Password" required/>
                <input type="checkbox" id="terms"></input>
                <label for="terms">I accept the terms and conditions</label>
                <button onClick={signUpHandler}>Sign Up</button>
            </form>
      </div>

    </div>
  );
};

export default SignUpPage;