import { createSlice } from "@reduxjs/toolkit";

//NOTE: slice: action + reducer
export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //NOTE: GET ALL, action name: getProductStart, getProductSucess
    getProductStart: (state) => {
      state.isFetching = true
      state.error = false
    },

    //TODO: Success 이면 fetch process is completed, so isfetching is false
    getProductSuccess: (state, action) => {
      state.isFetching = false
      state.products = action.payload;
    },
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    }
  }
});

//NOTE: apiCalls와 연결
export const {getProductStart, getProductSuccess, getProductFailure} = productSlice.actions;

export default productSlice.reducer;