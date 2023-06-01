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
  return (
    <ProfileContext.Provider
      value={{
        profileUser,
        profileFriends,
        statusWithAuthenticatedUser,
        fetchProfile,
        addFriend,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
