import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiRequest from '../axios/axios';
import { toast } from 'react-toastify';

export const getSubscriptionList = createAsyncThunk('users/getSubscriptionList', async (action) => {
  return await apiRequest(action);
});

const initialState = {
  isLoggedIn: false,
  subscriptionList: [],
  status: 'idle',
};

export const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    logUserOut: (state) => {
      state.isLoggedIn = false;
      state.userData = {};
    },
  },
  extraReducers(builder) {
    builder

      // get subscription list
      .addCase(getSubscriptionList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getSubscriptionList.fulfilled, (state, action) => {
        let data = action.payload.data.data ? action.payload.data.data : [];
        let message = action.payload.data.message;
        let status = action.payload.status;
        if (status === 200) {
          state.subscriptionList = data;
        } else {
          state.status = 'failed';
          toast.error(message);
          console.log(action.payload);
        }
      });
  },
});

export const { logUserOut } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
