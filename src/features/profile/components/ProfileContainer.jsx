import { useParams } from "react-router-dom";
import CoverImage from "./CoverImage";
import ProfileInfo from "./ProfileInfo";
import ProfileWrapper from "./ProfileWraper";
import { useEffect } from "react";
import useProfile from "../hooks/useProfile";

export default function ProfileContainer() {
  const { profileUserId } = useParams();
  const { fetchProfile } = useProfile();

  useEffect(() => {
    fetchProfile(profileUserId);
  }, [profileUserId, fetchProfile]);
  return (
    <ProfileWrapper
      cover={
        <CoverImage src="https://images.pexels.com/photos/957002/berchtesgaden-alpine-watzmann-berchtesgaden-national-park-957002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      }
    >
      <ProfileInfo action={<div> </div>} />
    </ProfileWrapper>
  );
}
