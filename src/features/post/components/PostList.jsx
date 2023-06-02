import Post from "./Post";

export default function PostList({ posts }) {
  return (
    <div className="flex flex-col gap-4">
      {posts.map((el) => (
        <Post key={el.id} post={el} />
      ))}
    </div>
  );
}
