import axios from "axios";

export default axios.create({
  baseURL: "https://itchy-plum-caridea.cyclic.app/api",
  headers: {
    "Content-type": "application/json"
  }
});
