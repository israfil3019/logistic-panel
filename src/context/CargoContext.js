import React, { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { getCargosAssigned, getCargosUnAssigned, getData } from "../api/api";

export const CargoContext = createContext();

export const CargoProvider = (props) => {
  const [cargosAssigned, setCargosAssigned] = useState([]);
  const [cargosUnAssigned, setCargosUnAssigned] = useState([]);
  const [token] = useCookies(["mytoken"]);

  useEffect(() => {
    fetch("https://panel.poshta.ua/api/logistic/cargos/unassigned", {
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
        console.log('kargolar',response);
      })
      .catch((error) => console.log(error));
  }, [token]);

  // let url = 'logistic/cargos/unassigned?disabled_deparmant=1';
  // let url1 = 'logistic/cargos/unassigned';
  // useEffect(() => {
  //   getCargosUnAssigned({ url1 }, token['mytoken'])
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
  // }, [token, url, url1]);

  return (
    <CargoContext.Provider value={{ cargosAssigned, cargosUnAssigned }}>
      {props.children}
    </CargoContext.Provider>
  );
};
