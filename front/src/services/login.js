import axios from "axios";
import { apiUrl } from "./ApiUrl/apiUrl";

const route = "/user/login";

const login = async (credentials) => {
  try {
    const { data } = await axios.post(apiUrl + route, credentials);
    return data.data.token;
  } catch (error) {
    throw new Error("Error de inicio de sesión: " + error.message);
  }
};

export default { login };
