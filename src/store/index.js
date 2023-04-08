import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/user';
import subscriptionReducer from './slices/subscription';
import accountReducer from './slices/account';
import clinicReducer from './slices/clinic';

const store = configureStore({
  reducer: {
    user: userReducer,
    subscription: subscriptionReducer,
    account: accountReducer,
    clinic: clinicReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
