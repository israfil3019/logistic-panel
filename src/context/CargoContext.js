import React, { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import {getCargosAssigned, getCargosUnAssigned } from "../api/api";

export const CargoContext = createContext();

export const CargoProvider = (props) => {
  const [cargosAssigned, setCargosAssigned] = useState([])
  const [cargosUnAssigned, setCargosUnAssigned] = useState([])
  const [token, setToken] = useCookies(["mytoken"]);
 // let url = 'https://'
  // useEffect(() => {
  //   getData(url)
  //     .then((res) => {
  //       setCargos(res.data);
  //       console.log(res.data)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    getCargosUnAssigned(token["mytoken"])
      .then((res) => {
        setCargosUnAssigned(res.data);
        console.log(res)
      })
      .catch((error) => {
        console.log(error);
      });
    getCargosAssigned(token["mytoken"])
      .then((res) => {
        setCargosAssigned(res.data);
        console.log(res)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <CargoContext.Provider value={{cargosAssigned, cargosUnAssigned}}>
      {props.children}
    </CargoContext.Provider>
  );
};
