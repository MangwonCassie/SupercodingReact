import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";


//모든 리듀서 다 기재해야함
//주의해야 할 부분은 reducer가 아니라 reducers가 아닌 reducer 필드

export default configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
    },
});