import React, { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
// import { getCargosAssigned, getCargosUnAssigned, getData } from "../api/api";

export const CargoContext = createContext();

export const CargoProvider = (props) => {
  const [cargosAssigned, setCargosAssigned] = useState([]);
  const [cargosUnAssigned, setCargosUnAssigned] = useState([]);
  const [token] = useCookies(["mytoken"]);

  useEffect(() => {
    fetch("https://panel.poshta.ua/api/logistic/cargos/assigned?page=1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token["mytoken"]}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setCargosAssigned(response.data);
        setCargosUnAssigned(response.data);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, [token]);

  // let url = 'logistic/cargos/assigned?page=1'
  // useEffect(() => {
  //   getCargosUnAssigned({ url }, token['mytoken'])
  //     .then((res) => {
  //       setCargosUnAssigned(res.data);
  //       console.log(res)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   getCargosAssigned({ url }, token['mytoken'])
  //     .then((res) => {
  //       setCargosAssigned(res.data);
  //       console.log(res)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <CargoContext.Provider value={{ cargosAssigned, cargosUnAssigned }}>
      {props.children}
    </CargoContext.Provider>
  );
};
