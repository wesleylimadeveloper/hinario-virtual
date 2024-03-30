import Constants from "expo-constants";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { BASE_URL } = Constants.expoConfig.extra;

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  async (config) => {
    const authToken = await AsyncStorage.getItem("@hinario_virtual:auth_token");

    if (authToken) {
      const token = JSON.parse(authToken);
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  async function (error) {
    return Promise.reject(error);
  }
);

export default api;
