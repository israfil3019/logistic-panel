import axios from "axios";

export const baseUrl = (path) =>
  `${process.env.REACT_APP_BASE_API_URL}/${path}`;

export const getData = async (url, token) => {
  const response = await axios.get(url, {
    headers: { "Content-Type": "application/json",
    Authorization: `Bearer ${token['mytoken']}`
  },
  });
  return response;
};

export const LoginUser = async (body) => {
  const response = await fetch(baseUrl(`external/login`), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return response;
};

