export default function ProfileWrapper({ children, cover }) {
  return (
    <div className="bg-gradient-to-b from-gray-300 to-white shadow">
      <div className="max-w-[68.5rem] max-h-[25.25rem] overflow-hidden flex justify-center items-center mx-auto rounded-b-lg aspect-[1096/404]">
        {cover}
      </div>
      <div className="max-w-[66.5rem] mx-auto">{children}</div>
    </div>
  );
}
