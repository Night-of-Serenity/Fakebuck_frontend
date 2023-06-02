import { MessageIcon, ThumbsUpAltIcon, ThumbsUpIcon } from "../../../icons";

export default function PostFooter() {
  return (
    <div>
      <div className="flex justify-between items-center py-2.5">
        <div>
          <div className="h-[1.125rem] w-[1.125rem] rounded-full bg-blue-500 inline-flex items-center justify-center">
            <ThumbsUpIcon />
          </div>
          <span className="text-sm ml-1">2</span>
        </div>
        <span role="button" className="hover:underline text-sm text-gray-500">
          8 comments
        </span>
      </div>
      <hr />
      <div className="flex py-1 gap-1">
        <button className="py-1.5 w-full text-sm font-semibold  rounded hover:bg-gray-200">
          <div className="flex gap-2 justify-center items-center">
            <ThumbsUpAltIcon className="fill-gray-500" />
            <span className="text-gray-500">Like</span>
          </div>
        </button>
        <button className="py-1.5 w-full text-sm font-semibold rounded hover:bg-gray-200">
          <div className="flex gap-2 justify-center items-center">
            <MessageIcon className="fill-gray-500" />
            <span className="text-gray-500">Comment</span>
          </div>
        </button>
      </div>
    </div>
  );
}
