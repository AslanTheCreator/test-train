import { configureStore } from '@reduxjs/toolkit';
import train from './train/slice';

export const store = configureStore({
  reducer: {
    train,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
