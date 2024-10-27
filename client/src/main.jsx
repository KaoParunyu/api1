import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Login from "./page/login.jsx";
import Register from "./page/register.jsx";
import Profile from "./page/profile.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
       <Route path ="/" element ={ <App />}/>
       <Route path ="/login" element ={ <Login />}/>
       <Route path ="/register" element ={ <Register />}/>
       <Route path ="/profile" element ={ <Profile />}/>

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
