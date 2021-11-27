// import axios from "axios";

const headers = {
  Authorization: "Bearer 2212|UWO5RjSDCzeUAlxmtt1fIBAUd71DKAArxpdAAeCu",
  "Content-Type": "application/json",
};

export const baseUrl = (path) =>
  `${process.env.REACT_APP_BASE_API_URL}/${path}`;

// export const getData = async (url, token) => {
//   const response = await axios.get(url, {
//     headers: { "Content-Type": "application/json",
//     Authorization: `Bearer ${token['mytoken']}`
//   },
//   });
//   return response;
// };

// export const getAllDepartments = async (url, token) => {
//   const response = await axios.get(baseUrl(`url`), {
//     headers: { "Content-Type": "application/json",
//     Authorization: `Bearer ${token['mytoken']}`
//   },
//   });
//   return response;
// };

export const LoginUser = (body) => {
  return fetch(baseUrl(`external/login`), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((response) => response.json());
};

export const getAllDepartments = () => {
  return fetch(baseUrl("logistic/departments"), {
    headers,
  }).then((response) => response.json());
};

export const getCargosUnAssigned = () => {
  return fetch(baseUrl("logistic/cargos/unassigned?page=1"), {
    headers,
  }).then((response) => response.json());
};

export const getCargosAssigned = () => {
  return fetch(baseUrl("logistic/cargos/assigned?page=1"), {
    headers,
  }).then((response) => response.json());
};


