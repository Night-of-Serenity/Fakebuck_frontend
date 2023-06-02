import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

export default function Post() {
  return (
    <div className="bg-white rounded-lg border shadow px-4 pt-3">
      <PostHeader />
      <div className="mb-3"></div>
      <div className="flex flex-col gap-4">
        <span>Hello my friend</span>
        <div className="-mx-4">
          <img src="https://images.pexels.com/photos/567540/pexels-photo-567540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </div>
      </div>
      <PostFooter />
    </div>
  );
}
