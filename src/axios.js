import axios from "axios";

const instance = axios.create({
  //backend api rooturl
  baseURL: "https://physicalbleakdictionary.suryanshsunil.repl.co/api/"
});

export default instance;
