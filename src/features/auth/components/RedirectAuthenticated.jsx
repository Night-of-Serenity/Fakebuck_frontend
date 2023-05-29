import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function RedirectAuthenticated({ children }) {
  // consumte isAuthenticated from auth state
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return children;
}
