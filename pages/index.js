import React, { useState } from 'react';
import { useRouter } from 'next/router';
import '../src/app/globals.css';
import './index.css';


const LoginPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const loginHandler = () => {
    if (username != undefined && password != undefined) {
      setLoggedIn(true);
      router.push('/home');
    } else {
      alert('Invalid Username or Password');
    }
  };

  const signUpHandler = () => {
    router.push('/signup');
  }

  return (
    <div className = "sign-in">
      <form action="">
        <h1>Login</h1>
        <div class = "input-box">
        <input type="text" placeholder="Username" value={username} onChange={(user) => setUsername(user.target.value)} />
        </div>
        <div class = "input-box">
        <input type="password" placeholder="Password" value={password} onChange={(pass) => setPassword(pass.target.value)} />
        </div>
        <button onClick={loginHandler}>Login</button>
        <div className = "signup">
        <p>Not a member? Sign up today!!!</p>
        </div>
        <button onClick={signUpHandler}>Sign Up</button>
      </form>
    </div>
  );
};

export default LoginPage;