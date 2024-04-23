import React, { useState } from 'react';
import { useRouter } from 'next/router';
import '../src/app/globals.css';
import './signup.css';



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
    <div className = "hero">
      <div className="signup-box">
        <div class= "left-box">
            <form>
            <h1>Create an account</h1>
                <input type="text" placeholder="Your Name" required class="input-box"/>
                <input type="text" placeholder="Username" required class="input-box"/>
                <input type="email" placeholder="Your email id" required class="input-box"/>
                <input type="password" placeholder="Create Password" required class="input-box"/>
                <input type="checkbox" id="terms"></input>
                <label for="terms">I accept the terms and conditions</label>
                <button onClick={signUpHandler}>Sign Up</button>
            </form>
          </div>
      </div>
    </div>
  );
};

export default SignUpPage;