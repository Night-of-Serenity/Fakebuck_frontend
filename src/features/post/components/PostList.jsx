import Post from "./Post";

export default function PostList() {
  return (
    <div className="flex flex-col gap-4">
      <Post />
      <Post />
      <Post />
    </div>
  );
}
