import Loading from "./components/Loading";
import Router from "./route/Router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Loading />
      <Router />;
      <ToastContainer position="bottom-center" theme="dark" autoClose={3000} />
    </div>
  );
}

export default App;
