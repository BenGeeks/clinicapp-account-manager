import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiRequest from '../axios/axios';
import { toast } from 'react-toastify';

export const getClinicList = createAsyncThunk('users/getClinicList', async (action) => {
  return await apiRequest(action);
});

const initialState = {
  isLoggedIn: false,
  clinicList: [],
  status: 'idle',
};

export const clinicSlice = createSlice({
  name: 'clinic',
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
      .addCase(getClinicList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getClinicList.fulfilled, (state, action) => {
        let data = action.payload.data.data ? action.payload.data.data : [];
        let message = action.payload.data.message;
        let status = action.payload.status;
        if (status === 200) {
          state.clinicList = data;
        } else {
          state.status = 'failed';
          toast.error(message);
          console.log(action.payload);
        }
      });
  },
});

export const { logUserOut } = clinicSlice.actions;
export default clinicSlice.reducer;
