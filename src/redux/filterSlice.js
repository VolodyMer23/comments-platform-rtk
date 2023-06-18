import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterValue: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilterValue } = filterSlice.actions;

export default filterSlice.reducer;

//Selectors
