import FormButton from "./FormButton";

export default function PictureForm({ title, children }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-bold">{title}</h5>
        <div>
          <FormButton>Save</FormButton>
          <FormButton>Cancel</FormButton>
          <FormButton>Edit</FormButton>
        </div>
      </div>
      {children}
    </div>
  );
}
