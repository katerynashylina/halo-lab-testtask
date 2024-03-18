import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  caveData: [],
};

const caveDataSlice = createSlice({
  name: 'caveData',
  initialState,
  reducers: {
    setCaveData: (state, action) => {
      state.caveData = action.payload;
    },
  },
});

export const { setCaveData } = caveDataSlice.actions;

export default caveDataSlice.reducer;