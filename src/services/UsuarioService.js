import axios from "axios";
import { endPoints } from "../static/js/endpoints";
import * as functions from "../static/js/functions";
import * as AuthService from "./AuthService";

export async function login(data) {
  var config = functions.serviceRetornarConfig(
    "post",
    endPoints.usuarioLogin,
    data,
    false
  );
  try {
    return (await axios(config)).data;
  } catch (error) {
    return functions.serviceRetornarErro(error);
  }
}
