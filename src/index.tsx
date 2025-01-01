import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typography from "@mui/material/Typography";
import {changeTitle, TitleProvider} from './Components/changeTitle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const titleApp = process.env.REACT_APP_TITLE || 'Default Title';
changeTitle(titleApp);
console.log('Title from environment:', process.env.REACT_APP_TITLE);

const isDisable = false;
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <TitleProvider title={titleApp}>
          {isDisable ?
              <Typography variant="h1" component="h1" sx={{textAlign: "center"}}>Error, this website don't work </Typography> : <App />
          }
          </TitleProvider>
      </BrowserRouter>
    
  </React.StrictMode>
);


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
        registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            if (installingWorker) {
                installingWorker.onstatechange = () => {
                    if (installingWorker.state === 'installed') {
                        if (navigator.serviceWorker.controller) {
                            console.log('New content is available; refreshing...');
                            window.location.reload(); // Автообновление
                        }
                    }
                };
            }
        };
    });
}




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
