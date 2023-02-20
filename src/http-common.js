import axios from "axios";
import { Base_url, Access_Token } from "../src/constant/app.constant";

export default axios.create({
  baseURL: Base_url
});
