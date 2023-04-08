import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiRequest from '../axios/axios';
import { toast } from 'react-toastify';

export const userLogIn = createAsyncThunk('users/loginStatus', async (action) => {
  return await apiRequest(action);
});

export const verifyToken = createAsyncThunk('users/verifyToken', async (action) => {
  return await apiRequest(action);
});

export const userLogOut = createAsyncThunk('users/logoutStatus', async (action) => {
  return await apiRequest(action);
});

const initialState = {
  isLoggedIn: false,
  userInfo: {},
  userData: {},
  subscriptionInfo: {},
  accountInfo: {},
  clinicList: [],
  status: 'idle',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logUserOut: (state) => {
      state.isLoggedIn = false;
      state.userData = {};
    },
    logUserIn: (state, action) => {
      state.isLoggedIn = true;
      state.userData = action.payload.userData;
    },
  },
  extraReducers(builder) {
    builder
      // User log in
      .addCase(userLogIn.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(userLogIn.fulfilled, (state, action) => {
        let data = action.payload.data.data ? action.payload.data.data : {};
        let message = action.payload.data.message;
        let status = action.payload.status;
        if (status === 200) {
          state.status = 'succeeded';
          toast.success(message);
          state.isLoggedIn = true;
          state.userData = data;
          state.userInfo = data.userInfo;
          state.subscriptionInfo = data.subscriptionInfo;
          state.accountInfo = data.accountInfo;
          state.clinicList = data.clinicList;
          localStorage.setItem('clinicAppUserData', JSON.stringify({ _id: data._id, token: data.token, access: data.access }));
        } else {
          state.status = 'failed';
          toast.error(message);
          console.log(action.payload);
        }
      })

      // Login user by token
      .addCase(verifyToken.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(verifyToken.fulfilled, (state, action) => {
        let data = action.payload.data.data ? action.payload.data.data : {};
        let message = action.payload.data.message;
        let status = action.payload.status;
        if (status === 200) {
          state.status = 'succeeded';
          state.isLoggedIn = true;
          state.userData = data;
          state.userInfo = data.userInfo;
          state.subscriptionInfo = data.subscriptionInfo;
          state.accountInfo = data.accountInfo;
          state.clinicList = data.clinicList;
        } else {
          toast.error(message);
          state.status = 'failed';
          localStorage.removeItem('clinicAppUserData');
          console.log(action.payload);
        }
      })

      // User log out
      .addCase(userLogOut.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(userLogOut.fulfilled, (state) => {
        toast.success('Successfully logged out.');
        state.status = 'succeeded';
        state.isLoggedIn = false;
        state.userInfo = {};
        localStorage.removeItem('clinicAppUserData');
      });
  },
});

export const { logUserOut, logUserIn } = userSlice.actions;
export default userSlice.reducer;
