import { useState } from "react";
import { toast } from "react-toastify";

import RegisterInput from "./RegisterInput";
import validateRegister from "../validators/validate-register";
import InputErrorMessage from "./InputErrorMessage";
import { useDispatch } from "react-redux";
import { registerAsync } from "../slice/auth-slice.";

const initialInput = {
  firstName: "",
  lastName: "",
  emailOrMobile: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterForm({ onSuccess }) {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const dispatch = useDispatch();

  const handleChangeInput = (e) => setInput({ ...input, [e.target.name]: e.target.value });

  const handdleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateRegister(input); // use validate which return error if there is error
      // console.dir(result);

      // if there is error, keep it in error state
      if (result) {
        return setError(result);
      }
      setError({});
      // const res = await authService.register(input);
      // setAccessToken(res.data.accessToken);
      await dispatch(registerAsync(input)).unwrap();
      toast.success("register successfully");
      onSuccess(); // use to close register modal
      // dispatch(register());
    } catch (err) {
      console.dir(err);
      toast.error(err.response.data.message);
    }
  };
  return (
    <form onSubmit={handdleSubmitForm}>
      <div className="grid grid-cols-2 gap-x-3 gap-y-2">
        <div>
          <RegisterInput
            placeholder="First name"
            value={input.firstName}
            onChange={handleChangeInput}
            name="firstName"
            isInvalid={error.firstName}
          />
          {error.firstName && <InputErrorMessage message={error.firstName} />}
        </div>
        <div>
          <RegisterInput
            placeholder="Last name"
            value={input.lastName}
            onChange={handleChangeInput}
            name="lastName"
            isInvalid={error.lastName}
          />
          {error.lastName && <InputErrorMessage message={error.lastName} />}
        </div>

        <div className="col-span-full">
          <RegisterInput
            placeholder="Email address or mobile number"
            value={input.emailOrMobile}
            onChange={handleChangeInput}
            name="emailOrMobile"
            isInvalid={error.emailOrMobile}
          />
          {error.emailOrMobile && <InputErrorMessage message={error.emailOrMobile} />}
        </div>
        <div className="col-span-full">
          <RegisterInput
            placeholder="password"
            value={input.password}
            onChange={handleChangeInput}
            name="password"
            isInvalid={error.password}
          />
          {error.password && <InputErrorMessage message={error.password} />}
        </div>
        <div className="col-span-full">
          <RegisterInput
            placeholder="confirm password"
            value={input.confirmPassword}
            onChange={handleChangeInput}
            name="confirmPassword"
            isInvalid={error.confirmPassword}
          />
          {error.confirmPassword && <InputErrorMessage message={error.confirmPassword} />}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button className="bg-green-500 hover:bg-green-600 rounded-lg text-white text-lg font-bold px-8 py-2">
          Sign up
        </button>
      </div>
    </form>
  );
}
