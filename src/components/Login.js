import React from 'react';
import Button from '@material-ui/core/Button';
import './Login.css';
function Login() {
  const signIn = {};
  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='/images/WhatsApp_logo-color-vertical.svg'
          alt='whatsapp logo'
        />
        <div className='login__text'>
          <h1>Sign in to whats app</h1>
        </div>
        <Button type='submit' onClick={signIn}>
          Sign In with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
