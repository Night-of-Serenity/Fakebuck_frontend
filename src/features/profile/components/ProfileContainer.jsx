import { useParams } from "react-router-dom";
import CoverImage from "./CoverImage";
import ProfileInfo from "./ProfileInfo";
import ProfileWrapper from "./ProfileWraper";
import { useEffect } from "react";
import useProfile from "../hooks/useProfile";
import MeAction from "./MeAction";
import FriendAction from "./FriendAction";
import UnknownAction from "./UnknownAction";
import RequesterAction from "./RequesterAction";
import ReceiverAction from "./ReceiverAction";

const actionMapping = {
  ME: <MeAction />,
  FRIEND: <FriendAction />,
  UNKNOWN: <UnknownAction />,
  REQUESTER: <RequesterAction />,
  RECEIVER: <ReceiverAction />,
};

export default function ProfileContainer() {
  const { profileUserId } = useParams();
  const { fetchProfile, profileUser, statusWithAuthenticatedUser } =
    useProfile();
  // console.log(profileUser);

  useEffect(() => {
    fetchProfile(profileUserId);
  }, [profileUserId, fetchProfile]);
  return (
    <ProfileWrapper cover={<CoverImage src={profileUser.coverImage} />}>
      <ProfileInfo action={actionMapping[statusWithAuthenticatedUser]} />
    </ProfileWrapper>
  );
}
