import Modal from "../../../components/Modal";

export default function RegisterContainer() {
  return (
    <div>
      <button className="bg-green-400 text-white rounded-md px-4 leading-[3rem] font-bold hover:bg-green-600 tracking-wider">
        Create new account
      </button>
      <Modal />
    </div>
  );
}
