import ProfileContainer from "../features/profile/components/ProfileContainer";
import ProfileContextProvider from "../features/profile/context/ProfileContextProvider";

export default function ProfilePage() {
  return (
    <ProfileContextProvider>
      <ProfileContainer />
    </ProfileContextProvider>
  );
}
