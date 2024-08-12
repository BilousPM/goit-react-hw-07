import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66b3a7577fba54a5b7edbe1c.mockapi.io/';

export const fetchContactsThunk = createAsyncThunk(
  'fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('phone_book');

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteContactThunk = createAsyncThunk(
  'deleteContact',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`phone_book/${id}`);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const addContactThunk = createAsyncThunk(
  'addContact',
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post('phone_book', body);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
