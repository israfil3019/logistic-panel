import React, { useContext, useState } from "react";
// import { CargoProvider } from "../context/CargoContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Buttons from "../components/Buttons";
import CanlıEkran from "../pages/CanlıEkran";
import Manifesto from "../pages/Manifesto";
import TimeZone from "../pages/TimeZone";
import ZonePlan from "../pages/ZonePlan";
import Operasyon from "../pages/Operasyon";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import { useCookies } from "react-cookie";

const AppRouter = () => {
  const [token] = useCookies(["mytoken"]);

  const AuthContainer = () => (
    <div>
      <Navbar />
      <Buttons />
      <ProtectedRoute
        token={token}
        exact
        path="/operasyon"
        component={Operasyon}
      />
      <ProtectedRoute
        token={token}
        exact
        path="/canli-ekran"
        component={CanlıEkran}
      />
      <ProtectedRoute exact path="/manifesto" component={Manifesto} />
      <ProtectedRoute exact path="/zone-plan" component={ZonePlan} />
      <ProtectedRoute exact path="/time-zone" component={TimeZone} />
    </div>
  );
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <LoginPage />} />
        <Route exact component={AuthContainer} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
