import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import { Provider } from "react-redux";
import App from "./App";
import { Store } from "./redux/Store"; // Import your Redux store
import "./index.css";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
      <Provider store={Store}>
        <App />
        <ToastContainer/>
      </Provider>
    
  </BrowserRouter>
);
