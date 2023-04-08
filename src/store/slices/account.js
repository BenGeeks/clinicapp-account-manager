import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiRequest from '../axios/axios';
import { toast } from 'react-toastify';

export const createNewAccount = createAsyncThunk('users/createNewAccount', async (action) => {
  return await apiRequest(action);
});

export const signup = createAsyncThunk('users/signup', async (action) => {
  return await apiRequest(action);
});

const initialState = {
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
      });
  },
});

export default accountSlice.reducer;
