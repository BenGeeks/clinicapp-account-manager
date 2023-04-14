import React, { useEffect, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import { verifyToken } from './store/slices/user';

const HomePage = lazy(() => import('./components/home/home'));
const LoginPage = lazy(() => import('./components/public/login'));
const RegistrationPage = lazy(() => import('./components/public/register'));
const SignupPage = lazy(() => import('./components/public/signup'));

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('clinicAppUserData'));
    if (userData && userData.token && userData._id) {
      dispatch(verifyToken({ method: 'post', url: `account/verify`, token: userData.token, data: { _id: userData._id } }));
    }
  }, [dispatch]);

  return (
    <Suspense>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/register/:token" element={<RegistrationPage />} />
        {isLoggedIn ? (
          <Route path="*" element={<HomePage />} />
        ) : (
          <>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </Suspense>
  );
}

export default App;
