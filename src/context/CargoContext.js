import React, { createContext, useEffect, useState } from "react";
import { getData } from "../functions/Functions";

export const CargoContext = createContext();

export const CargoProvider = (props) => {
  const [cargos, setCargos] = useState([]);
  useEffect(() => {
    getData('data.json')
      .then((res) => {
        setCargos(res.data);
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <CargoContext.Provider value={[cargos, setCargos]}>
      {props.children}
    </CargoContext.Provider>
  );
};
