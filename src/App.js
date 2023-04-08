import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { verifyToken } from './store/slices/user';

import LoginPage from './components/public/login';
import RegistrationPage from './components/public/register';
import SignupPage from './components/public/signup';
import HomePage from './components/home/home';
import OwnerHomePage from './components/home/owner-home';
import Redirect from './components/home/redirect';

const OWNER = 'owner';
const SUPPORT = 'support';
const SUPERUSER = 'superuser';

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn && state.user.isLoggedIn);
  const access = useSelector((state) => state.user.userData.access);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('clinicAppUserData'));
    if (userData && userData.token && userData._id) {
      dispatch(verifyToken({ method: 'post', url: `account/verify`, token: userData.token, data: { _id: userData._id } }));
    }
  }, [dispatch]);

  return (
    <Routes>
      {isLoggedIn && access === OWNER && <Route path="*" element={<OwnerHomePage />} />}
      {isLoggedIn && (access === SUPPORT || access === SUPERUSER) && <Route path="*" element={<HomePage />} />}
      {!isLoggedIn && (
        <>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/register/:token" element={<RegistrationPage />} />
          <Route path="*" element={<Redirect />} />
        </>
      )}
    </Routes>
  );
}

export default App;
