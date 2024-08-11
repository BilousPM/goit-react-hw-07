import { createSlice } from '@reduxjs/toolkit';
import { deleteContactThunk, fetchContactsThunk } from './operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // setLoadingStatus: (state, action) => {
    //   state.loading = action.payload;
    // },
    // setErrorStatus: (state, action) => {
    //   state.error = action.payload;
    // },
    // fetchData: (state, action) => {
    //   state.items = action.payload;
    // },
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    // deleteContact: (state, action) => {
    //   state.items = state.items.filter(item => item.id !== action.payload);
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContactsThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      });
  },
});

export const contactReducer = slice.reducer;
export const { deleteContact, addContact } = slice.actions;
