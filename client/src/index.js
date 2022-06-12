//import ReactDOM  from "react-dom/client";
//import { createRoot } from "react-dom/client";
import React from 'react'; 
import ReactDOM from 'react-dom';
//import  StrictMode from "react";
import App from "./App";
import { ContextProvider } from "./context/Context";

//const rootElement = document.getElementById("root");
//const root = createRoot(rootElement);

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
    <App />
    </ContextProvider>
      
  </React.StrictMode>,
  document.getElementById("root")
);
