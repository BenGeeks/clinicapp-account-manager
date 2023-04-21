import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiRequest from '../axios/axios';
import { toast } from 'react-toastify';

export const getUserList = createAsyncThunk('user/getUserList', async (action) => {
  return await apiRequest(action);
});

export const getUserOptions = createAsyncThunk('user/getUserOptions', async (action) => {
  return await apiRequest(action);
});

export const userLogIn = createAsyncThunk('user/loginStatus', async (action) => {
  return await apiRequest(action);
});

export const verifyToken = createAsyncThunk('user/verifyToken', async (action) => {
  return await apiRequest(action);
});

export const userLogOut = createAsyncThunk('user/userLogOut', async (action) => {
  return await apiRequest(action);
});

export const resetPassword = createAsyncThunk('user/resetPassword', async (action) => {
  return await apiRequest(action);
});

export const updatePassword = createAsyncThunk('user/updatePassword', async (action) => {
  return await apiRequest(action);
});

const initialState = {
  isLoggedIn: false,
  emailSent: false,
  userData: {},
  userList: [],
  userOptions: {},
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
  },
  extraReducers(builder) {
    builder
      // User log in
      .addCase(userLogIn.pending, (state) => {
        state.status = 'loading';
        state.emailSent = false;
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
          localStorage.setItem('clinicAppUserData', JSON.stringify({ _id: data._id, token: data.token, access: data.access, accountId: data.accountId }));
        } else {
          state.status = 'failed';
          toast.error(message);
          console.log(action.payload);
        }
      })

      // Login user by token
      .addCase(verifyToken.pending, (state) => {
        state.status = 'loading';
        state.emailSent = false;
      })
      .addCase(verifyToken.fulfilled, (state, action) => {
        let data = action.payload.data.data ? action.payload.data.data : {};
        let message = action.payload.data.message;
        let status = action.payload.status;
        if (status === 200) {
          state.status = 'succeeded';
          state.isLoggedIn = true;
          state.userData = data;
        } else {
          toast.error(message);
          state.isLoggedIn = false;
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
        state.status = 'success';
        state.isLoggedIn = false;
        state.userInfo = {};
        localStorage.removeItem('clinicAppUserData');
      })

      // Reset Password
      .addCase(resetPassword.pending, (state) => {
        state.status = 'loading';
        state.emailSent = false;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        let message = action.payload.data.message;
        let status = action.payload.status;
        if (status === 200) {
          toast.success(message);
          state.status = 'success';
          state.emailSent = true;
        } else {
          toast.error(message);
          state.status = 'failed';
          console.log(action.payload);
        }
      })

      // Update Password
      .addCase(updatePassword.pending, (state) => {
        state.status = 'loading';
        state.emailSent = false;
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        let message = action.payload.data.message;
        let status = action.payload.status;
        if (status === 200) {
          toast.success(message);
          state.status = 'success';
        } else {
          toast.error(message);
          state.isLoggedIn = false;
          state.status = 'failed';
          localStorage.removeItem('clinicAppUserData');
          console.log(action.payload);
        }
      })

      // get user list
      .addCase(getUserList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUserList.fulfilled, (state, action) => {
        let data = action.payload.data.data ? action.payload.data.data : {};
        let message = action.payload.data.message;
        let status = action.payload.status;
        if (status === 200) {
          state.status = 'succeeded';
          state.userList = data;
        } else {
          state.status = 'failed';
          toast.error(message);
          console.log(action.payload);
        }
      })

      // get user options
      .addCase(getUserOptions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUserOptions.fulfilled, (state, action) => {
        let data = action.payload.data.data ? action.payload.data.data : {};
        let message = action.payload.data.message;
        let status = action.payload.status;
        if (status === 200) {
          state.status = 'succeeded';
          state.userOptions = data;
        } else {
          state.status = 'failed';
          toast.error(message);
          console.log(action.payload);
        }
      });
  },
});

export const { logUserOut } = userSlice.actions;
export default userSlice.reducer;
