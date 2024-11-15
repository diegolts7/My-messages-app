import Footer from "../components/layout/footer/Footer";
import Initial from "../components/pages/initial/Initial";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/register/Register";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route
          element={
            <>
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recover-password" element />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
