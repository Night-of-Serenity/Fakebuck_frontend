import { useRef } from "react";
import FormButton from "./FormButton";
import { useState } from "react";

export default function PictureForm({ title, children, initialSrc, onSave }) {
  const inputEl = useRef();
  const [file, setFile] = useState(null);
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <input
          type="file"
          className="hidden"
          ref={inputEl}
          onChange={(e) => {
            // console.log(e.target.value);
            if (e.target.files[0]) {
              setFile(e.target.files[0]);
            }
          }}
        ></input>
        <h5 className="text-xl font-bold">{title}</h5>
        <div>
          {file && (
            <>
              <FormButton onClick={onSave}>Save</FormButton>
              <FormButton
                onClick={() => {
                  setFile(null);
                  inputEl.current.value = "";
                }}
              >
                Cancel
              </FormButton>
            </>
          )}
          <FormButton onClick={() => inputEl.current.click()}>Edit</FormButton>
        </div>
      </div>
      {children(file ? URL.createObjectURL(file) : initialSrc)}
    </div>
  );
}
