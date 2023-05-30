import Avatar from "../components/Avatar";
import { RightFromBracketIcon } from "../icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const dropdownEl = useRef();

  const user = useSelector((state) => state.auth.user);
  // console.log(dropdownEl);
  useEffect(() => {
    const handleClickOutside = (e) => {
      // console.log(e.target);
      if (!dropdownEl.current.contains(e.target)) setOpen(false);
    };
    console.log(dropdownEl.current);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  return (
    <div className="relative" ref={dropdownEl}>
      <div role="button" onClick={() => setOpen(!open)}>
        <Avatar className="h-10 w-10" src={user.profileImage} />
      </div>
      {open && (
        <div
          className="absolute right-0 translate-y-1 rounded-xl bg-white w-96 
      shadow-lg p-2"
        >
          <Link to="/profile">
            <div className="flex items-center gap-4 rounded-lg hover:bg-gray-100 p-2">
              <Avatar
                className="h-[3.75rem] w-[3.75rem]"
                src={user.profileImage}
              />
              <div>
                <div className="font-semibold">
                  {user.firstName} {user.lastName}
                </div>
                <div className="text-gray-500 text-sm">See your profile</div>
              </div>
            </div>
          </Link>

          <hr className="border border-gray-300 m-2" />

          <div
            role="button"
            className="flex items-center  gap-4 p-2 hover:bg-gray-100 rounded-lg"
          >
            <div className="rounded-full bg-gray-300 h-7 w-7 flex justify-center items-center">
              <RightFromBracketIcon />
            </div>
            <span className="text-sm font-semibold">Log out</span>
          </div>
        </div>
      )}
    </div>
  );
}
