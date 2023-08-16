import { fetchConfig } from "./fecthConfig";
import { fetchLoginConfig } from "./fecthConfig";

const fetchLogin = async (url: string, payload: any) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    body: JSON.stringify(payload),
  };
  return fetchLoginConfig(url, options);
};

const fetchPostData = async (url: string, payload: any) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    body: JSON.stringify(payload),
  };
  return fetchConfig(url, options);
};

const fetchAdminPanelConfig = async (url: string, payload: any) => {
  const options = {
    method: "POST",
    headers: {
      // "Content-Type": "multipart/form-data",
      Accept: "*/*",
    },
    body: payload,
  };
  return fetchConfig(url, options);
};

const fetchData = async (url: string) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
  };
  return fetchConfig(url, options);
};

const deleteAdminPanelConfig = async (url: string) => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    // body: payload,
  };
  return fetchConfig(url, options);
};

const fetchAPIServices = {
  fetchLogin: fetchLogin,
  fetchAdminPanelConfig: fetchAdminPanelConfig,
  fetchData: fetchData,
  deleteAdminPanelConfig: deleteAdminPanelConfig,
  fetchPostData: fetchPostData,
};

export default fetchAPIServices;
