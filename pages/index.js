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
      <h1>Login</h1>
      <input type="text" placeholder="Username" value={username} onChange={(user) => setUsername(user.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(pass) => setPassword(pass.target.value)} />
      <button onClick={loginHandler}>Login</button>
      <p>Not a member? Sign up for $1,000,000 today!</p>
      <button onCLick={signUpHandler}>Sign Up</button>
    </div>
  );
};

export default LoginPage;