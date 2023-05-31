import Avatar from "../../../components/Avatar";
import PictureForm from "./PictureForm";
import * as userService from "../../../api/user-api";
import { useState } from "react";
import Loading from "../../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import CoverImage from "./CoverImage";
import {
  updateProfileImage as updateAction,
  updateCoverImage as updateCover,
} from "../../auth/slice/auth-slice";

export default function EditProfileForm() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const updateProfileImage = async (input) => {
    const formData = new FormData();
    console.log(input);
    formData.append("profileImage", input);

    setIsLoading(true);
    const res = await userService.updateUserImage(formData);
    setIsLoading(false);
    dispatch(updateAction(res.data.profileImage));
  };

  const updateCoverImage = async (input) => {
    const formData = new FormData();
    console.log(input);
    formData.append("coverImage", input);

    setIsLoading(true);
    const res = await userService.updateUserImage(formData);
    setIsLoading(false);
    dispatch(updateCover(res.data.profileImage));
  };
  return (
    <>
      {isLoading && <Loading />}
      <div className="flex flex-col gap-4">
        <PictureForm
          onSave={updateProfileImage}
          title="Profile Image"
          initialSrc={user.profileImage}
        >
          {(src) => (
            <div className="flex justify-center">
              <Avatar
                className="h-[10.5rem] w-[10.5rem]"
                alt="user"
                src={src}
              />
            </div>
          )}
        </PictureForm>
        <PictureForm
          onSave={updateCoverImage}
          title="Cover Image"
          initialSrc={user.coverImage}
        >
          {(src) => (
            <div className="aspect-[1096/404] overflow-hidden flex justify-center items-center rounded-lg">
              <CoverImage src={src} />
            </div>
          )}
        </PictureForm>
      </div>
    </>
  );
}
