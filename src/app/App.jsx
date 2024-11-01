import Initial from "../components/pages/initial/Initial";
import Login from "../components/pages/login/Login";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element />
        <Route path="/recover-password" element />
      </Routes>
    </Router>
  );
}

export default App;
