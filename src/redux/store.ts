import { configureStore } from '@reduxjs/toolkit';

import customizationReducer from './slice/customizationSlice';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    customization: customizationReducer,
  },
});

export default store;
