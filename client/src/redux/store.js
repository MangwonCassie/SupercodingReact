import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";

//로그인 후 유저갖고 있게끔 처리
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'


  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

  //홈페이지 rootReducer를 userReducer로
  const persistedReducer = persistReducer(persistConfig, userReducer);


//모든 리듀서 다 기재해야함
//주의해야 할 부분은 reducer가 아니라 reducers가 아닌 reducer 필드

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: persistedReducer,
    },

    //추후 팔로우업
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

//index.js에 연결
export let persistor = persistStore(store);