export const fetchLoginConfig = async (url: string, options: any) => {
  let data = null;
  try {
    const response = await fetch(url, options);
    data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export const fetchConfig = async (url: string, options: any) => {
  let data = null;
  let status = null;
  try {
    const response = await fetch(url, options);

    data = await response.json();
    status = response.status;
    return { data, status };
  } catch (error) {
    console.log("error", error);
  }
};
