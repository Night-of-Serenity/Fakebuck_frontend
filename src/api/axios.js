import axios from "axios";

import { BACKEND_URL } from "../config/env";

axios.defaults.baseURL = BACKEND_URL;
export default axios;
