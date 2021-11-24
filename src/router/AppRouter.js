import React, { useState } from "react";
import { CargoProvider } from "../context/CargoContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Buttons from "../components/Buttons";
import CanlıEkran from "../pages/CanlıEkran";
import Manifesto from "../pages/Manifesto";
import TimeZone from "../pages/TimeZone";
import ZonePlan from "../pages/ZonePlan";
import Operasyon from "../pages/Operasyon";
import NotFound from "../pages/NotFound";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
  const [auth, setAuth] = useState(false)


  const AuthContainer = () => (
    <div>
      <Navbar />
      <Buttons />
      <ProtectedRoute
        auth={auth}
        exact
        path="/operasyon"
        component={Operasyon}
      />
      <ProtectedRoute
        auth={auth}
        exact
        path="/canli-ekran"
        component={CanlıEkran}
      />
      <ProtectedRoute
        auth={auth}
        exact
        path="/manifesto"
        component={Manifesto}
      />
      <ProtectedRoute
        auth={auth}
        exact
        path="/zone-plan"
        component={ZonePlan}
      />
      <ProtectedRoute
        auth={auth}
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
            path="/login"
            exact
            component={() => <LoginPage auth={auth} setAuth={setAuth} />}
          />
          <Route component={AuthContainer} />
        </Switch>
    </Router>
  );
};

export default AppRouter;
