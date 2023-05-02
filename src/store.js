import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './component/users/UserSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
})