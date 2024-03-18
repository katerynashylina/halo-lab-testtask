import { configureStore } from '@reduxjs/toolkit';
import caveDataReducer from '../features/caveData';

export const store = configureStore({
  reducer: {
    caveData: caveDataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;