import Avatar from "../../../components/Avatar";
import useProfile from "../hooks/useProfile";

export default function ProfileInfo({ action }) {
  const {
    profileUser: { firstName, lastName, profileImage },
    profileFriends,
  } = useProfile();
  console.log(useProfile());
  console.log(profileFriends);
  return (
    <div className="flex items-end gap-4 px-4 pb-4">
      <div className="-mt-8">
        <Avatar
          src={profileImage}
          className="h-[10.5rem] w-[10.5rem] ring ring-white"
        />
      </div>

      <div className="flex-1 mb-4">
        <h2 className="text-3xl font-bold">
          {firstName} {lastName}
        </h2>
        <span className="block text-gray-500 py-1 font-semibold">
          {profileFriends.length} friends
        </span>
        <div className="flex -space-x-2">
          {profileFriends.map((el) => (
            <Avatar
              key={el.id}
              src={el.profileImage}
              className="h-[2rem] w-[2rem] ring-2 ring-white"
            />
          ))}
        </div>
      </div>

      <div className="mb-4">{action}</div>
    </div>
  );
}
