import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

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

  console.log(isLoggedIn);
  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <HomePage /> : <LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/register/:token" element={<RegistrationPage />} />
    </Routes>
  );
}

export default App;
