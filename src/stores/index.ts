import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user.reducer'
import commonReducer from './common.reducer'

export const store = configureStore({
  reducer: {
    members: userReducer,
    common: commonReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
