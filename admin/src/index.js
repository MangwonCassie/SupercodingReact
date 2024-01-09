import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react';

//persistGate가 있어야 persist 가능
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading="null" persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
