//import ReactDOM  from "react-dom/client";
import { createRoot } from "react-dom/client";
import React from "react"; 
import  StrictMode from "react";
import App from "./App";
import { ContextProvider } from "./context/Context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ContextProvider>
    <App />
    </ContextProvider>
      
  </StrictMode>
);
