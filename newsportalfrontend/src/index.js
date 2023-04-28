import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {AdminPovider} from "./context/adminContext";
import {AppPovider} from "./context/appContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AdminPovider>
      <AppPovider>
      <App />
      </AppPovider>
    </AdminPovider>
  </React.StrictMode>
);
