import axios from "./axios";

export const updateUserImage = (input) => axios.patch("/users/image", input);
