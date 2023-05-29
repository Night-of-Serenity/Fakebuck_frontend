import React from "react";
import createClassName from "../../../utils/create-classes";

export default function LoginInput({
  placeholder,
  value,
  onChange,
  name,
  isInvalid,
}) {
  const className = createClassName(
    "block w-full border rounded-md px-4 py-3.5 outlin-none focus:ring-1",
    isInvalid
      ? "border-red-500 focus:ting-red-300"
      : "border-gray-300 focus:border-blue-500 focus:ring-blue-300"
  );
  return (
    <input
      type="text"
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
}
