import React from "react";
import { Navigate, Route } from "react-router-dom";

const PrivateRouter = ({ element: Element, auth, ...rest }) => {
  return (
    <Route
    {...rest}
    render={props => {
      return auth ? <Element {...props} /> : <Navigate to="/login" />
    }}
  ></Route>)}
    
export default PrivateRouter;
