import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../slices/booksSlices';

const store = configureStore({
  reducer: {
    books: bookReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
