import createClassName from "../../../utils/create-classes";

export default function RegisterInput({ placeholder, value, onChange, name, isInvalid }) {
  const defaultClassName =
    "block w-full rounded-md border boder-gray-300 px-3 py-1.5 leading-6 outline-none text-sm focus:ring";
  const className = createClassName(
    defaultClassName,
    isInvalid
      ? "border-red-500 focus: ring-red-300"
      : "border-gray-300 focus:ring-blue-300 focus:border-blue-500"
  );
  return (
    <input
      type="text"
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    ></input>
  );
}
