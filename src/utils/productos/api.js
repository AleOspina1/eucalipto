import axios from "axios";

const baseURL = "https://hidden-eyrie-45043.herokuapp.com"

const getToken = () => {
  return `Bearer ${localStorage.getItem("token")}`;
};

export const obtenerProductos = async (successCallback, errorCallBack) => {
  const options = {
    method: "GET",
    url: `${baseURL}/productos/`,
    headers: {
      Authorization: getToken(),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallBack);
};

export const crearProducto = async (data, successCallback, errorCallBack) => {
  const options = {
    method: "POST",
    url: `${baseURL}/productos/`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    data,
  };

  await axios.request(options).then(successCallback).catch(errorCallBack);
};

export const editarProducto = async (id, data, successCallback, errorCallBack) => {
  const options = {
    method: "PATCH",
    url: `${baseURL}/productos/${id}`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    data,
  };

  await axios.request(options).then(successCallback).catch(errorCallBack);
};

export const eliminarProducto = async (id, successCallback, errorCallBack) => {
  const options = {
    method: "DELETE",
    url: `${baseURL}/productos/${id}`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
  };

  await axios.request(options).then(successCallback).catch(errorCallBack);
};
