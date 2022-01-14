import { server } from "../config/server";
import api from "../apis/base";

const apiEndpoint = server + "/tags";

const getTags = () => api.get(apiEndpoint);

export { getTags };
