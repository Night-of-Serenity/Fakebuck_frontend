import { useState } from "react";

export default function useForm(initialState, validate) {
  const [input, setInput] = useState(initialState);
  const [error, setError] = useState({});
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = (onSubmit) => async (e) => {
    e.preventDefault();
    const result = validate(input);
    if (result) {
      return setError(result);
    }
    setError({});
    await onSubmit(input);
    setInput(initialState);
  };

  return { input, handleChangeInput, handleSubmitForm, error };
}
