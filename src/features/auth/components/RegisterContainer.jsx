import { useState } from "react";
import Modal from "../../../components/Modal";
import RegisterForm from "./RegisterForm";

export default function RegisterContainer() {
  const [open, setOpen] = useState(false);
  const onClose = (e) => {
    setOpen(false);
  };
  return (
    <div>
      <button
        className="bg-green-400 text-white rounded-md px-4 leading-[3rem] font-bold hover:bg-green-600 tracking-wider"
        onClick={() => setOpen(true)}
      >
        Create new account
      </button>
      <Modal title="Sign up" width="27" open={open} onClose={onClose}>
        <RegisterForm onSuccess={() => setOpen(false)} />
      </Modal>
    </div>
  );
}
