import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <Router>
    <StrictMode>
      <App />
    </StrictMode>
    <Routes>
      {/* <Route path="/" element={}/>
      <Route path="/login" element={}/>
      <Route path="/register" element={}/>
      <Route path="/recover-password" element={}/> */}
    </Routes>
  </Router>
);
