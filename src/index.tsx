import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {RecoilRoot} from "recoil";
import {ThemeProvider} from "styled-components";
import {darkTheme} from "./theme";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <RecoilRoot>
        <ThemeProvider theme={darkTheme}>
            <BrowserRouter basename='/todolist'>
                <App />
            </BrowserRouter>
        </ThemeProvider>
      </RecoilRoot>
  </React.StrictMode>
);
