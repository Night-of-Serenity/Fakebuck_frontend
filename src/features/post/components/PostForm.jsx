import { useRef } from "react";
import { ImageIcon } from "../../../icons";
import { useState } from "react";

export default function PostForm() {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const inputEl = useRef();

  return (
    <form>
      <div className="flex flex-col gap-4">
        <textarea
          className="block w-full resize-none outline-none"
          rows="5"
          placeholder="What&rsquo;s on your mind, Jeo?"
          onChange={(e) => setMessage(e.tartget.value)}
          value={message}
        />
        <input
          type="file"
          className="hidden"
          ref={inputEl}
          onChange={(e) => {
            if (e.target.files[0]) {
              setFile(e.target.files[0]);
            }
          }}
        />

        {file ? (
          <div
            className="bg-gray-800 relative"
            onClick={() => inputEl.current.click()}
            role="button"
          >
            <img
              className="mx-auto"
              alt="post"
              src={URL.createObjectURL(file)}
            />
            <div
              className="absolute right-1.5 top-1.5 font-bold"
              onClick={(e) => {
                e.stopPropagation();
                setFile(null);
                inputEl.current.value = "";
              }}
            >
              &#10005;
            </div>
          </div>
        ) : (
          <div
            className="bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center flex-col py-12"
            onClick={() => inputEl.current.click()}
          >
            <div className="rounded-full bg-gray-300 h-10 w-10 flex items-center justify-center">
              <ImageIcon />
            </div>
            <span>Add photo</span>
          </div>
        )}

        <button className="bg-blue-500 hover:bg-blue-600 px-3 py-1.5 text-white text-sm rounded-md w-full h-9 font-semibold">
          Post
        </button>
      </div>
    </form>
  );
}
