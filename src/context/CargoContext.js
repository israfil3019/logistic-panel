import React, { createContext, useEffect, useState } from "react";
// import { getData } from "../functions/Functions";
import { Data } from "../data";

export const CargoContext = createContext();

export const CargoProvider = (props) => {
  const [cargos, setCargos] = useState(Data)
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

  return (
    <CargoContext.Provider value={{cargos}}>
      {props.children}
    </CargoContext.Provider>
  );
};
