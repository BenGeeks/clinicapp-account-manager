import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiRequest from '../axios/axios';
import { toast } from 'react-toastify';

export const getSubscriptionList = createAsyncThunk('users/getSubscriptionList', async (action) => {
  return await apiRequest(action);
});

export const getSubscriptionData = createAsyncThunk('users/getSubscriptionData', async (action) => {
  return await apiRequest(action);
});

export const createNewSubscription = createAsyncThunk('users/createNewSubscription', async (action) => {
  return await apiRequest(action);
});

export const updateSubscription = createAsyncThunk('users/updateSubscription', async (action) => {
  return await apiRequest(action);
});

export const deleteSubscription = createAsyncThunk('users/deleteSubscription', async (action) => {
  return await apiRequest(action);
});

const initialState = {
  isLoggedIn: false,
  subscriptionList: [],
  subscriptionData: {},
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
      })

      // get subscription data
      .addCase(getSubscriptionData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getSubscriptionData.fulfilled, (state, action) => {
        let data = action.payload.data.data ? action.payload.data.data : [];
        let message = action.payload.data.message;
        let status = action.payload.status;
        if (status === 200) {
          state.subscriptionData = data;
          state.status = 'completed';
        } else if (status === 401) {
          state.status = 'failed';
          toast.error(message);
          state.tokenExpired = true;
        } else {
          state.status = 'failed';
          toast.error(message);
          console.log(action.payload);
        }
      })
      .addCase(getSubscriptionData.rejected, (state, action) => {
        toast.error(action.payload.error);
        state.status = 'failed';
        console.log(action.payload);
      })

      // create new subscription
      .addCase(createNewSubscription.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createNewSubscription.fulfilled, (state, action) => {
        let data = action.payload.data.data ? action.payload.data.data : [];
        let message = action.payload.data.message;
        let status = action.payload.status;
        if (status === 200) {
          state.subscriptionList = data;
          state.status = 'success';
          toast.success(message);
        } else if (status === 401) {
          state.status = 'failed';
          toast.error(message);
          state.tokenExpired = true;
        } else {
          state.status = 'failed';
          toast.error(message);
          console.log(action.payload);
        }
      })
      .addCase(createNewSubscription.rejected, (state, action) => {
        toast.error(action.payload.error);
        state.status = 'failed';
        console.log(action.payload);
      })

      // update subscription

      .addCase(updateSubscription.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateSubscription.fulfilled, (state, action) => {
        let data = action.payload.data.data ? action.payload.data.data : [];
        let message = action.payload.data.message;
        let status = action.payload.status;
        if (status === 200) {
          state.subscriptionList = data;
          state.status = 'completed';
          toast.success(message);
        } else if (status === 401) {
          state.status = 'failed';
          toast.error(message);
          state.tokenExpired = true;
        } else {
          state.status = 'failed';
          toast.error(message);
          console.log(action.payload);
        }
      })
      .addCase(updateSubscription.rejected, (state, action) => {
        toast.error(action.payload.error);
        state.status = 'failed';
        console.log(action.payload);
      })

      // delete subscription
      .addCase(deleteSubscription.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteSubscription.fulfilled, (state, action) => {
        let data = action.payload.data.data ? action.payload.data.data : [];
        let message = action.payload.data.message;
        let status = action.payload.status;
        if (status === 200) {
          state.subscriptionList = data;
          state.status = 'completed';
          toast.success(message);
        } else if (status === 401) {
          state.status = 'failed';
          toast.error(message);
          state.tokenExpired = true;
        } else {
          state.status = 'failed';
          toast.error(message);
          console.log(action.payload);
        }
      })
      .addCase(deleteSubscription.rejected, (state, action) => {
        toast.error(action.payload.error);
        state.status = 'failed';
        console.log(action.payload);
      });
  },
});

export const { logUserOut } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
