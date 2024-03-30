import Constants from "expo-constants";
import axios from "axios";

const { BASE_URL } = Constants.expoConfig.extra;

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
