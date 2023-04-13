import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiRequest from '../axios/axios';
import { toast } from 'react-toastify';

export const getClinicList = createAsyncThunk('users/getClinicList', async (action) => {
  return await apiRequest(action);
});

export const createNewClinic = createAsyncThunk('users/createNewClinic', async (action) => {
  return await apiRequest(action);
});

export const getClinicData = createAsyncThunk('users/getClinicData', async (action) => {
  return await apiRequest(action);
});

export const updateClinic = createAsyncThunk('users/updateClinic', async (action) => {
  return await apiRequest(action);
});

const initialState = {
  isLoggedIn: false,
  clinicList: [],
  clinicData: {},
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

      // get clinic list
      .addCase(getClinicList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getClinicList.fulfilled, (state, action) => {
        let data = action.payload.data.data ? action.payload.data.data : [];
        let message = action.payload.data.message;
        let status = action.payload.status;
        if (status === 200) {
          state.clinicList = data;
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
      .addCase(getClinicList.rejected, (state, action) => {
        toast.error(action.payload.error);
        state.status = 'failed';
        console.log(action.payload);
      })

      // create new clinic
      .addCase(createNewClinic.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createNewClinic.fulfilled, (state, action) => {
        let data = action.payload.data.data ? action.payload.data.data : [];
        let message = action.payload.data.message;
        let status = action.payload.status;
        if (status === 200) {
          state.clinicList = data;
          state.status = 'success';
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
      .addCase(createNewClinic.rejected, (state, action) => {
        toast.error(action.payload.error);
        state.status = 'failed';
        console.log(action.payload);
      })

      // get clinic data
      .addCase(getClinicData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getClinicData.fulfilled, (state, action) => {
        let data = action.payload.data.data ? action.payload.data.data : [];
        let message = action.payload.data.message;
        let status = action.payload.status;
        if (status === 200) {
          state.clinicData = data;
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
      .addCase(getClinicData.rejected, (state, action) => {
        toast.error(action.payload.error);
        state.status = 'failed';
        console.log(action.payload);
      })

      // update clinic
      .addCase(updateClinic.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateClinic.fulfilled, (state, action) => {
        let data = action.payload.data.data ? action.payload.data.data : [];
        let message = action.payload.data.message;
        let status = action.payload.status;
        if (status === 200) {
          state.clinicList = data;
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
      .addCase(updateClinic.rejected, (state, action) => {
        toast.error(action.payload.error);
        state.status = 'failed';
        console.log(action.payload);
      });
  },
});

export const { logUserOut } = clinicSlice.actions;
export default clinicSlice.reducer;
