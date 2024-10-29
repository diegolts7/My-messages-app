import Initial from "../components/pages/initial/Initial";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Initial />} />
        {/* <Route path="/login" element={}/>
      <Route path="/register" element={}/>
      <Route path="/recover-password" element={}/>  */}
      </Routes>
    </Router>
  );
}

export default App;
