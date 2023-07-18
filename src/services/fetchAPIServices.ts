import fetchConfig from "./fecthConfig";

const fetchLogin = async (url: string, payload: any) => {
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

const fetchAPIServices = {
  fetchLogin: fetchLogin,
  fetchAdminPanelConfig: fetchAdminPanelConfig,
};

export default fetchAPIServices;
