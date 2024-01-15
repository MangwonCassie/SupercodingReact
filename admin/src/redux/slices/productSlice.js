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

    //NOTE: Success 이면 fetch process is completed, so isfetching is false
    getProductSuccess: (state, action) => {
      state.isFetching = false
      state.products = action.payload;
    },
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //NOTE: DELETE
    deleteProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    deleteProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload,
          1)
      );
    },
    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //NOTE update
    updateProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    updateProductSuccess: (state, action) => {
      console.log("Before update:", state.products); // 추가
      state.isFetching = false;
      const productIndex = state.products.findIndex((item) => item._id === action.payload._id);
      // 새로운 배열 생성
      const updatedProducts = [...state.products];
      // 해당 인덱스의 상품을 새로운 데이터로 교체
      updatedProducts[productIndex] = action.payload.product;
      // 상태 업데이트
      state.products = updatedProducts;
      console.log("After update:", state.products.product); // 추가
    },

    updateProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //NOTE: ADD
    addProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
    addProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

  }
});



//NOTE: apiCalls와 연결
export const { getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart, 
  deleteProductSuccess,
  deleteProductFailure,
   updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure, } = productSlice.actions;

export default productSlice.reducer;