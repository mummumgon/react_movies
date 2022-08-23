import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
const root = ReactDOM.createRoot(document.getElementById('root'));
const darkTheme = {
  textColor:"#fcfcfc",
  backgroundColor:"#333"
}
const lightTheme = {
  textColor:"#333",
  backgroundColor:"#fcfcfc"
}
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <ThemeProvider theme={darkTheme}>
  <App/>
  </ThemeProvider>
);

