import axios from "axios";

const baseURL = "https://young-savannah-31565.herokuapp.com"

const getToken = () => {
  return `Bearer ${localStorage.getItem("token")}`;
};

export const obtenerProductos = async (successCallback, errorCallBack) => {
  const options = {
    method: "GET",
    url: `${baseURL}/products/`,
    headers: {
      Authorization: getToken(),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallBack);
};

export const crearProducto = async (data, successCallback, errorCallBack) => {
  const options = {
    method: "POST",
    url: `${baseURL}/products/`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    data,
  };

  await axios.request(options).then(successCallback).catch(errorCallBack);
};

export const editarProducto = async (id, data, successCallback, errorCallBack) => {
  const options = {
    method: "PATCH",
    url: `${baseURL}/products/${id}`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    data,
  };

  await axios.request(options).then(successCallback).catch(errorCallBack);
};

export const eliminarProducto = async (id, successCallback, errorCallBack) => {
  const options = {
    method: "DELETE",
    url: `${baseURL}/products/${id}`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
  };

  await axios.request(options).then(successCallback).catch(errorCallBack);
};
