import axios from "axios";
import * as CONSTANTS from "../constants";

export const client = axios.create({
  baseURL: CONSTANTS.BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});
