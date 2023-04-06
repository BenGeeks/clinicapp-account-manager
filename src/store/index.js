import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/user';
import subscriptionReducer from './slices/subscription';
import accountReducer from './slices/account';

const store = configureStore({
  reducer: {
    user: userReducer,
    subscription: subscriptionReducer,
    account: accountReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
