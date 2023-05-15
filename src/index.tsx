import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typography from "@mui/material/Typography";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const isDisable = true
root.render(
  <React.StrictMode>
      <BrowserRouter>
          {isDisable ?
              <Typography variant="h1" component="h1" sx={{textAlign: "center"}}>Сайт не работает!</Typography> : <App />}
      </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
