import { useContext } from "react";
import { ProfileContext } from "../context/ProfileContextProvider";

export default function useProfile() {
  return useContext(ProfileContext);
}
