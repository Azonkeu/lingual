import { configureStore } from '@reduxjs/toolkit';
import userReducer from './logins/signup';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
