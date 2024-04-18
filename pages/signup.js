import React, { useState } from 'react';
import { useRouter } from 'next/router';
import '../src/app/globals.css';



const signUpPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const signUpHandler = () => {
    
  }

  return (
    <div className = "Hero">
      <h1>Create an account</h1>
      <div class="signup-box">
            <form>
                <input type="text" placeholder="Your Name" required/>
                <input type="text" placeholder="Username" required/>
                <input type="email" placeholder="Your email id" required/>
                <input type="password" placeholder="Create Password" required/>
                <input type="checkbox" id="terms"></input>
                <label for="terms">I accept the terms and conditions</label>
                <button type="submit">Sign Up</button>
                <button onCLick={signUpHandler}>Sign Up</button>
            </form>
      </div>

    </div>
  );
};