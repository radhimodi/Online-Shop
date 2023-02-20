
import reducer from "./containers/redux/reducer";
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    reducer
  },
});