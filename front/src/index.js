import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import generatorStore from './redux/store';
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API 
  ? process.env.REACT_APP_API 
  : "http://localhost:3001";

const store = generatorStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
