import React from "react";
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
        exact
        path="/operasyon"
        component={Operasyon}
      />
      <ProtectedRoute
        exact
        path="/canli-ekran"
        component={CanlıEkran}
      />
      <ProtectedRoute
        exact
        path="/manifesto"
        component={Manifesto}
      />
      <ProtectedRoute
        exact
        path="/zone-plan"
        component={ZonePlan}
      />
      <ProtectedRoute
        exact
        path="/time-zone"
        component={TimeZone}
      />
    </div>
  );
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          component={() => <LoginPage/>}
        />
        <Route exact component={token["mytoken"] ? AuthContainer : LoginPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
