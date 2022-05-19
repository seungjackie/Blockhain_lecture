import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';
import { reducer } from './redux/reducer/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 리덕스 스테이트를 초기값을 공유 한다.
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
