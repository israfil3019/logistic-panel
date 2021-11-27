import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";


function ProtectedRoute({component: Component, ...rest }) {
  const [token] = useCookies(["mytoken"]);
  console.log(token['mytoken'] ? true : false);

  return (
    <Route
      {...rest}
      render={(props) =>
        token['mytoken'] ? (
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
