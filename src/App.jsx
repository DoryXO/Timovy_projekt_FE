// import { useState } from 'react'
import { lazy,Suspense } from 'react'
import { Routes, Route,Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { chcekUser } from './reducers/userReducer'
import { useSelector } from 'react-redux'

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const UserDashboard = lazy(() => import('./pages/UserDashboard'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

const routesConfig = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login />, isPrivate: false },
  { path: '/userdashboard', element: <UserDashboard />, isPrivate: true },
  { path: '/admindashboard', element: <AdminDashboard />, isPrivate: true },
  // Add more routes here as needed
];

// PrivateRoute component
const PrivateRoute = ({ element }) => {
  const user = useSelector((state) => state.user);
  return user ? element : <Navigate to="/" />;
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(chcekUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routesConfig.map(({ path, element, isPrivate }) => (
            <Route 
              key={path} 
              path={path} 
              element={isPrivate ? <PrivateRoute element={element} /> : element} 
            />
          ))}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
{/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}