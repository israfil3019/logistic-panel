import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";


function ProtectedRoute({ component: Component, auth, ...rest }) {
  const [token] = useCookies(["mytoken"]);


  return (
    <Route
      {...rest}
      render={(props) =>
        token["mytoken"] ? (
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
