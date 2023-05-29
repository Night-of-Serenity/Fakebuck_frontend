import Router from "./route/Router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Router />;
      <ToastContainer position="bottom-center" theme="dark" autoClose={3000} />
    </div>
  );
}

export default App;
