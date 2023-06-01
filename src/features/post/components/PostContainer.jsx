import CreatePostBox from "./CreatePostBox";
import PostList from "./PostList";

export default function PostContainer() {
  return (
    <div className="max-w-[44rem] mx-auto px-8 py-6 flex flex-col gap-4">
      <CreatePostBox />
      <PostList />
    </div>
  );
}
