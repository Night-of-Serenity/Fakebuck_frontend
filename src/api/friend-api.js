import axios from "./axios";

export const addFriend = (receiverId) => {
  return axios.post(`/friends/${receiverId}`);
};

export const confirmFriend = (requesterId) =>
  axios.patch(`/friends/${requesterId}`);

export const rejectFriend = (requesterId) =>
  axios.delete(`/friends/${requesterId}/reject`);

export const cancelRequest = (receiverId) =>
  axios.delete(`/friends/${receiverId}/cancel`);

export const unfriend = (friendId) =>
  axios.delete(`/friends/${friendId}/unfriend`);
