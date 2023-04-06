import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiRequest from '../axios/axios';
import { toast } from 'react-toastify';

export const createNewAccount = createAsyncThunk('users/createNewAccount', async (action) => {
  return await apiRequest(action);
});

const initialState = {
  isLoggedIn: false,
  status: 'idle',
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    logUserOut: (state) => {
      state.isLoggedIn = false;
      state.userData = {};
    },
  },
  extraReducers(builder) {
    builder

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
          state.subscriptionList = data;
        } else {
          state.status = 'failed';
          toast.error(message);
          console.log(action.payload);
        }
      });
  },
});

export const { logUserOut } = accountSlice.actions;
export default accountSlice.reducer;
