import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './Routes/Route';
import AuthProvider from './Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  // </React.StrictMode>,

  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
);
