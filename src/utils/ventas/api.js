import axios from "axios";

const baseURL = "http://localhost:8080"

const getToken = () => {
  return `Bearer ${localStorage.getItem("token")}`;
};

export const obtenerVenta = async (successCallback, errorCallBack) => {
  const options = {
    method: "GET",
    url: `${baseURL}/sells/`,
    headers: {
      Authorization: getToken(),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallBack);
};

export const crearVenta = async (data, successCallback, errorCallBack) => {
  const options = {
    method: "POST",
    url: `${baseURL}/sells/`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    data,
  };

  await axios.request(options).then(successCallback).catch(errorCallBack);
};

export const editarVenta = async (id, data, successCallback, errorCallBack) => {
  const options = {
    method: "PATCH",
    url: `${baseURL}/sells/${id}`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    data,
  };

  await axios.request(options).then(successCallback).catch(errorCallBack);
};

export const eliminarVenta = async (id, successCallback, errorCallBack) => {
  const options = {
    method: "DELETE",
    url: `${baseURL}/sells/${id}`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
  };

  await axios.request(options).then(successCallback).catch(errorCallBack);
};
