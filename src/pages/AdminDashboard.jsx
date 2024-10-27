
import React from 'react';
import { removeUser } from '../reducers/userReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const AdminDashboard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    window.localStorage.removeItem('loggedBlogappUser')
    dispatch(removeUser())
    navigate('/')
  }

  return (
    <>
      <div>
        <h1>Welcome to the Admin Dashboard</h1>
        <p>This is a simple test example.</p>
      </div>
      <button onClick={handleLogout}>Logout</button>
      
    
    </>
  );
};

export default AdminDashboard;