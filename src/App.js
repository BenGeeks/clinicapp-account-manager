import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import { verifyToken } from './store/slices/user';

import LoginPage from './components/public/login';
import RegistrationPage from './components/public/register';
import SignupPage from './components/public/signup';
import HomePage from './components/home/home';

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn && state.user.isLoggedIn);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('clinicAppUserData'));
    if (userData && userData.token && userData._id) {
      dispatch(verifyToken({ method: 'post', url: `account/verify`, token: userData.token, data: { _id: userData._id } }));
    }
  }, [dispatch]);

  return (
    <Routes>
      {isLoggedIn ? (
        <Route path="*" element={<HomePage />} />
      ) : (
        <>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/register/:token" element={<RegistrationPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
}

export default App;
