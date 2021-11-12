import axios from "axios";

const baseURL = "http://localhost:8080"

const getToken = () => {
  return `Bearer ${localStorage.getItem("token")}`;
};

export const obtenerUsuarios = async (successCallback, errorCallBack) => {
  const options = {
    method: "GET",
    url: `${baseURL}/user/`,
    headers: {
      Authorization: getToken(),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallBack);
};

export const obtenerVendedores = async (successCallback, errorCallBack) => {
  const options = {
    method: "GET",
    url: `${baseURL}/user/`,
    headers: {
      Authorization: getToken(),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallBack);
};

export const editarUsuario = async (id, data, successCallback, errorCallBack) => {
  const options = {
    method: "PATCH",
    url: `${baseURL}/user/${id}`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallBack);
};

export const eliminarUsuario = async (id, successCallback, errorCallBack) => {
  const options = {
    method: "DELETE",
    url: `${baseURL}/user/${id}`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
  };

  await axios.request(options).then(successCallback).catch(errorCallBack);
};

export const obtenerDatosUsuarios = async (successCallback, errorCallBack) => {
  const options = {
    method: "GET",
    url: `${baseURL}/user`,
    headers: {
      Authorization: getToken(),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallBack);
};
