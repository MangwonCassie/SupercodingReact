import { combineReducers, configureStore } from "@reduxjs/toolkit";
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


  const rootReducer = combineReducers({user: userReducer});
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  

  
//주의해야 할 부분은 reducer가 아니라 reducers가 아닌 reducer 필드

export const store = configureStore({
    reducer: persistedReducer,
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