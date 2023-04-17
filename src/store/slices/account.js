import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiRequest from '../axios/axios';
import { toast } from 'react-toastify';

export const createNewAccount = createAsyncThunk('users/createNewAccount', async (action) => {
  return await apiRequest(action);
});

export const signup = createAsyncThunk('users/signup', async (action) => {
  return await apiRequest(action);
});

export const getAccountList = createAsyncThunk('users/getAccountList', async (action) => {
  return await apiRequest(action);
});

export const getAccountData = createAsyncThunk('users/getAccountData', async (action) => {
  return await apiRequest(action);
});

export const updateAccount = createAsyncThunk('users/updateAccount', async (action) => {
  return await apiRequest(action);
});

export const getAccountSummary = createAsyncThunk('users/getAccountSummary', async (action) => {
  return await apiRequest(action);
});

const initialState = {
  isLoggedIn: false,
  accountList: [],
  accountData: {},
  accountSummary: {},
  status: 'idle',
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder

      // sign up account
      .addCase(signup.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signup.fulfilled, (state, action) => {
        let message = action.payload.data.message;
        let status = action.payload.status;
        if (status === 200) {
          toast.success(message);
          state.status = 'success';
        } else {
          state.status = 'failed';
          toast.error(message);
          console.log(action.payload);
        }
      })
      .addCase(signup.rejected, (state, action) => {
        toast.error(action.payload.error);
        state.status = 'failed';
        console.log(action.payload);
      })

      // create new account
      .addCase(createNewAccount.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createNewAccount.fulfilled, (state, action) => {
        let data = action.payload.data.data ? action.payload.data.data : [];
        let message = action.payload.data.message;
        let status = action.payload.status;
        if (status === 200) {
          toast.success(message);
          state.status = 'success';
          localStorage.setItem('clinicAppUserData', JSON.stringify({ _id: data._id, token: data.token, access: data.access }));
        } else {
          state.status = 'failed';
          toast.error(message);
          console.log(action.payload);
        }
      })
      .addCase(createNewAccount.rejected, (state, action) => {
        toast.error(action.payload.error);
        state.status = 'failed';
        console.log(action.payload);
      })

      // get all accounts
      .addCase(getAccountList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAccountList.fulfilled, (state, action) => {
        let data = action.payload.data.data ? action.payload.data.data : [];
        let message = action.payload.data.message;
        let status = action.payload.status;
        if (status === 200) {
          state.status = 'success';
          state.accountList = data;
        } else {
          state.status = 'failed';
          toast.error(message);
          console.log(action.payload);
        }
      })
      .addCase(getAccountList.rejected, (state, action) => {
        toast.error(action.payload.error);
        state.status = 'failed';
        console.log(action.payload);
      })

      // get account data
      .addCase(getAccountData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAccountData.fulfilled, (state, action) => {
        let data = action.payload.data.data ? action.payload.data.data : [];
        let message = action.payload.data.message;
        let status = action.payload.status;
        if (status === 200) {
          state.status = 'completed';
          state.accountData = data;
        } else {
          state.status = 'failed';
          toast.error(message);
          console.log(action.payload);
        }
      })
      .addCase(getAccountData.rejected, (state, action) => {
        toast.error(action.payload.error);
        state.status = 'failed';
        console.log(action.payload);
      })

      // get complete account data
      .addCase(getAccountSummary.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAccountSummary.fulfilled, (state, action) => {
        let data = action.payload.data.data ? action.payload.data.data : [];
        let message = action.payload.data.message;
        let status = action.payload.status;
        if (status === 200) {
          state.status = 'completed';
          state.accountSummary = data;
        } else {
          state.status = 'failed';
          toast.error(message);
          console.log(action.payload);
        }
      })
      .addCase(getAccountSummary.rejected, (state, action) => {
        toast.error(action.payload.error);
        state.status = 'failed';
        console.log(action.payload);
      })

      // update account
      .addCase(updateAccount.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateAccount.fulfilled, (state, action) => {
        let data = action.payload.data.data ? action.payload.data.data : [];
        let message = action.payload.data.message;
        let status = action.payload.status;
        if (status === 200) {
          state.status = 'success';
          state.accountList = data;
          toast.success(message);
        } else {
          state.status = 'failed';
          toast.error(message);
          console.log(action.payload);
        }
      })
      .addCase(updateAccount.rejected, (state, action) => {
        toast.error(action.payload.error);
        state.status = 'failed';
        console.log(action.payload);
      });
  },
});

export default accountSlice.reducer;
