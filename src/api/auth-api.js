import axios from "./axios";

export const register = (input) => axios.post("/auth/register", input);
