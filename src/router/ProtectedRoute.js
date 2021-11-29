import React from "react";
import { Route, Redirect } from "react-router-dom";


function ProtectedRoute({component: Component, auth, ...rest }) {

  return (
    <Route
      {...rest}
      render={(props) =>
        (auth && auth !=='undefined') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
export default ProtectedRoute;
