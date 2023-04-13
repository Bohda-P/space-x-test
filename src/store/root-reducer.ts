import { combineReducers } from '@reduxjs/toolkit';
// Reducers
import { productsReducer } from './testSaga/slice';

export const rootReducer = combineReducers({
  products: productsReducer,
});
