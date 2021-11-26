import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";


function ProtectedRoute({ component: Component, ...rest }) {
  const [token] = useCookies(["mytoken"]);
  const auth = true;

  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
export default ProtectedRoute;
