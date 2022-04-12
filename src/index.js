import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import EldenRing from './service/eldenRing';
import { BrowserRouter } from "react-router-dom";
import '@fortawesome/fontawesome-free/js/all.js';



const httpClient = axios.create({
  baseURL:`https://eldenring.fanapis.com/api/`
});
const eldenring = new EldenRing(httpClient);


ReactDOM.render(
  
  <BrowserRouter>
  <React.StrictMode>
    <App eldenring={eldenring}/>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

