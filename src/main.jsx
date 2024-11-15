import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App";
import { AuthContext } from "./context/authContext/AuthContext";

createRoot(document.getElementById("root")).render(
  <AuthContext>
    <StrictMode>
      <App />
    </StrictMode>
  </AuthContext>
);
