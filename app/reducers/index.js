//combine reducers

import { combineReducers } from "redux"

import product from './product/productReducers';

export default combineReducers({
  product
})

