import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66b3a7577fba54a5b7edbe1c.mockapi.io/';

export const fetchContactsThunk = createAsyncThunk(
  'fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('phone_book');
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteContactThunk = createAsyncThunk(
  'deleteContact',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`phone_book/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
// export const fetchContactsThunk = () => async dispatch => {
//   try {
//     dispatch(setLoadingStatus(true));
//     const response = await axios.get('phone_book');
//     // console.log(response.data);
//     dispatch(fetchData(response.data));
//   } catch (error) {
//     console.log(error);
//     dispatch(setErrorStatus(true));
//   } finally {
//     dispatch(setLoadingStatus(false));
//   }
// };

// export const deleteContactThunk = id => async dispatch => {
// try {
//   dispatch(setLoadingStatus(true));
//   const response = await axios.delete(`phone_book/${id}`);
//   console.log(`You have deleted the contact : ${response.data.name}`);
//   dispatch(deleteContact(id));
// } catch (error) {
//   console.log(error);
//   dispatch(setErrorStatus(true));
// } finally {
//   dispatch(setLoadingStatus(false));
// }
// };
