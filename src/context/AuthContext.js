import React, { createContext, useContext} from "react";

export const baseUrl = (path) =>
  `${process.env.REACT_APP_BASE_API_URL}/${path}`;

export const AuthContext = createContext({});

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {

  const LoginUser = async (body) => {
    const response = await fetch(baseUrl(`external/login`), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
    return await response.json();
  };

  return {
    LoginUser,
  };
}
