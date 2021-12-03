// import axios from "axios";

const headers = {
  Authorization: "Bearer 3083%7CNfSy23cF43A2U7YLKCZv07AMUvsLNE8wdNX11O54",
  "Content-Type": "application/json",
};

export const baseUrl = (path) =>
  `${process.env.REACT_APP_BASE_API_URL}/${path}`;

// export const getData = async (url, token) => {
//   const response = await axios.get(url, {
//     headers: { "Content-Type": "application/json",
//     Authorization: `Bearer ${token}`
//   },
//   });
//   return response;
// };

// export const getAllDepartments = async (url, token) => {
//   const response = await axios.get(url, {
//     headers: { "Content-Type": "application/json",
//     Authorization: `Bearer ${token}`
//   },
//   });
//   return response;
// };

// export const LoginUser = (body) => {
//   return fetch(baseUrl(`external/login`), {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   }).then((response) => response.json());
// };

// export const LoginUser = async (body) => {
//   const response = await fetch(baseUrl(`external/login`), {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json",
//      },
//      body: JSON.stringify(body),
//    });
//    return response.json();
//  };

// export const getAllDepartments = async ({url, token}) => {
//   const response = await fetch(baseUrl(url), {
//    headers: { "Content-Type": "application/json",
//    Authorization: `Bearer ${token}`
//  }});
//    return response.json()
//  };
 

 
export const getAllDepartments = async ({url}) => {
 const response = await fetch(baseUrl(url), {
    headers,
  });
  return response.json()
};


export const getCargosAssigned = async ({url}) => {
  const response = await fetch(baseUrl(url), {
    headers,
  });
  return response.json()
};

export const getCargosUnAssigned = async ({url1}) => {
  const response = await fetch(baseUrl(url1), {
    headers,
  });
   return response.json()
};

