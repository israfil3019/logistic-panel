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
import { ProvideAuth } from "../context/AuthContext";

const AppRouter = () => {
  const [token] = useCookies(["mytoken"]);

  const AuthContainer = () => (
    <div>
      <Navbar />
      <Buttons />
      <ProtectedRoute
        auth={token["mytoken"]}
        exact
        path="/operasyon"
        component={Operasyon}
      />
      <ProtectedRoute
        auth={token["mytoken"]}
        exact
        path="/canli-ekran"
        component={CanlıEkran}
      />
      <ProtectedRoute
        auth={token["mytoken"]}
        exact
        path="/manifesto"
        component={Manifesto}
      />
      <ProtectedRoute
        auth={token["mytoken"]}
        exact
        path="/zone-plan"
        component={ZonePlan}
      />
      <ProtectedRoute
        auth={token["mytoken"]}
        exact
        path="/time-zone"
        component={TimeZone}
      />
    </div>
  );
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route path="/" exact component={() => <LoginPage />} />
          <Route
            exact
            component={(token["mytoken"] !=='undefined' && token["mytoken"] ) ? AuthContainer : LoginPage}
          />
        </Switch>
      </Router>
    </ProvideAuth>
  );
};

export default AppRouter;
