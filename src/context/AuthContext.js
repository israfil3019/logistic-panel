import React, { useState, createContext, useEffect } from "react";

export const AuthContext = createContext({});

export default function Auth(props) {
  const [user, setUser] = useState([]);
  console.log(user)
  useEffect(() => {
    setUser()
  }, [setUser])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}
