import axios from "./axios";

export const addFriend = (receiverId) => {
  return axios.post(`/friends/${receiverId}`);
};
