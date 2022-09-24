import axios from "axios";
import {BASE_URL} from "./consts";
import version from "../../package.json";

import userAPI from "./userAPI";

let configData: any;

axios.interceptors.request.use(
  async (config: any) => {
    configData = config;

    return {
      ...config,
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json",
        "App-Version": version,
        "App-Platform": "web",
        ...config.headers,
      },
    };
  },
  (error: any) => {
    console.log("Request", {url: configData.url, ...configData.headers});

    return Promise.reject(error);
  }
);

class APIService {
  user = userAPI;
}

const API = new APIService();
export default API;
