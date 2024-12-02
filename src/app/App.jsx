import { useContext } from "react";
import Home from "../components/pages/home/Home";
import Initial from "../components/pages/initial/Initial";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/register/Register";
import PrivatedRoutesNotLoggedIn from "../routes/privated/PrivatedRoutesNotLoggedIn";
import PrivateRoutesLoggedIn from "../routes/privated/PrivateRoutesLoggedIn";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContextAuth } from "../context/authContext/AuthContext";
import LoadingInicial from "../components/layout/loadingInitial/LoadingInicial";
import Explore from "../components/pages/explore/Explore";
import Profile from "../components/pages/profile/Profile";
import Save from "../components/pages/save/Save";

function App() {
  const { loading } = useContext(ContextAuth);
  return (
    <>
      {!loading ? (
        <Router>
          <Routes>
            <Route element={<PrivatedRoutesNotLoggedIn />}>
              <Route path="/" element={<Initial />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/recover-password" element />
            </Route>
            <Route element={<PrivateRoutesLoggedIn />}>
              <Route path="/home" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/save" element={<Save />} />
              <Route path="/:id" element={<Profile />} />
            </Route>
          </Routes>
        </Router>
      ) : (
        <LoadingInicial />
      )}
    </>
  );
}

export default App;
