import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'   
import { Provider } from 'react-redux'  

import { configureStore } from '@reduxjs/toolkit'

import userReducer from './reducers/userReducer'

import './css/styles.css'

const store = configureStore({
  reducer: {
    // notification: notificationReducer,
    user: userReducer,
    // userList: userListReducer
  }
})

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
);
