import React from 'react';
import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { login as setUser } from '../reducers/userReducer';
import { useDispatch } from 'react-redux';
import '../css/Login.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()



  const navigate = useNavigate()

  const handleLogin = async event => {
    console.log('logging in')
    event.preventDefault()
    try {
      await dispatch(
        setUser({
          email,
          password
        })
      )
      const user = JSON.parse(window.localStorage.getItem('loggedBlogappUser'));
      if (user && user.role === 'admin') {
        navigate('/admindashboard'); // Redirect to admin dashboard
      } else {
        navigate('/userdashboard'); // Redirect to user dashboard
      }

      setEmail('')
      setPassword('')

      console.log('wrong username or password')
    } catch (exeption) {
      console.log('wrong username or password')
    }
  }



  return (
    <>
      <Navbar className="navbar" />
      <h1>Login</h1>
      <div className="login-form">
        <LoginForm 
          onLogin={handleLogin} 
          email={email} 
          password={password} 
          handleEmailChange={({ target }) => setEmail(target.value)}
          handlePasswordChange={({ target }) => setPassword(target.value)}
        />
      </div>
    </>
  );
};

export default Login;