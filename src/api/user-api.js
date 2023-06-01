import axios from "./axios";

export const updateUserImage = (input) => axios.patch("/users/image", input);
export const getProfileUser = (profileUserId) =>
  axios.get(`/users/${profileUserId}/profile`);
