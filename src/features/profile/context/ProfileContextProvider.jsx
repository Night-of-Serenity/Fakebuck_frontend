import { useState, useCallback } from "react";
import { createContext } from "react";
import * as userService from "../../../api/user-api";
import * as friendService from "../../../api/friend-api";

export const ProfileContext = createContext();

export default function ProfileContextProvider({ children }) {
  const [profileUser, setProfileUser] = useState({});
  const [profileFriends, setProfileFriends] = useState([]);
  const [statusWithAuthenticatedUser, setStatusWithAuthenticatedUser] =
    useState("");

  const fetchProfile = useCallback(async (profileUserId) => {
    try {
      const res = await userService.getProfileUser(profileUserId);
      setProfileUser(res.data.user);
      setProfileFriends(res.data.friends);
      setStatusWithAuthenticatedUser(res.data.statusWithAuthenticatedUser);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const addFriend = async () => {
    try {
      await friendService.addFriend(profileUser.id);
      await fetchProfile(profileUser.id);
    } catch (err) {
      console.log(err);
    }
  };

  const confirmFriend = async () => {
    try {
      await friendService.confirmFriend(profileUser.id);
      await fetchProfile(profileUser.id);
    } catch (err) {
      console.log(err);
    }
  };

  const rejectFriend = async () => {
    try {
      await friendService.rejectFriend(profileUser.id);
      await fetchProfile(profileUser.id);
    } catch (err) {
      console.log(err);
    }
  };

  const cancelRequest = async () => {
    try {
      await friendService.cancelRequest(profileUser.id);
      await fetchProfile(profileUser.id);
    } catch (err) {
      console.log(err);
    }
  };
  const unfriend = async () => {
    try {
      await friendService.unfriend(profileUser.id);
      await fetchProfile(profileUser.id);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ProfileContext.Provider
      value={{
        profileUser,
        profileFriends,
        statusWithAuthenticatedUser,
        fetchProfile,
        addFriend,
        confirmFriend,
        rejectFriend,
        cancelRequest,
        unfriend,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
