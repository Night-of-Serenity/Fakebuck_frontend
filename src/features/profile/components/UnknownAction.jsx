import useProfile from "../hooks/useProfile";

export default function UnknownAction() {
  const { addFriend } = useProfile();
  return (
    <div>
      <button
        className="px-3 py-1.5 rounded-md bg-gray-200 hover:bg-gray-300 font-semibold"
        onClick={addFriend}
      >
        Add friends
      </button>
    </div>
  );
}
