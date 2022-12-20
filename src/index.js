import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import React require="react"
//import ReactDOM require="react-dom"

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

//ReactDOM.render(
  // arg1: WHAT U WANT TO SHOW, 
  // arg2: WHERE YOU WANT TO SHOW IT, 
  // arg3: CALLBACK WHEN RENDER IS COMPLETE
  // );


