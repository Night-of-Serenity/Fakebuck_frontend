import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import RedirectAuthenticated from "../features/auth/components/RedirectAuthenticated";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import Header from "../layouts/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <ProtectedRoute>
      <Header />
      // </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <RedirectAuthenticated>
        <LoginPage />
      </RedirectAuthenticated>
    ),
  },
  {
    path: "/friend",
    element: <Header />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
