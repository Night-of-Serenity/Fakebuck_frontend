import CoverImage from "./CoverImage";
import ProfileInfo from "./ProfileInfo";
import ProfileWrapper from "./ProfileWraper";

export default function ProfileContainer() {
  return (
    <ProfileWrapper
      cover={
        <CoverImage src="https://images.pexels.com/photos/957002/berchtesgaden-alpine-watzmann-berchtesgaden-national-park-957002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      }
    >
      <ProfileInfo />
    </ProfileWrapper>
  );
}
