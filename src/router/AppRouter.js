import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import LoginPage from "../pages/LoginPage";
import Operasyon from "../components/main/operasyon/Operasyon";
import CanlıEkran from "../pages/CanlıEkran";

const AppRouter = () => {
  const [auth, setAuth] = useState(false);

  const AuthContainer = () => (
    <div>
      <Navbar />
      <PrivateRouter auth={auth} exact path="/operasyon" element={<Operasyon />} />
      <PrivateRouter auth={auth} path="/canli-ekran" element={<CanlıEkran/>} />
    </div>
  );
  return (
    <div>
      <BrowserRouter>
        {/* <LoginPage/> */}
        <Routes>
          <Route
            path="/login"
            element={() => <LoginPage auth={auth} setAuth={setAuth} />}
          />

          <Route element={AuthContainer} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
