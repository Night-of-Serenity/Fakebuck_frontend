import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import FriendPage from "../pages/FriendPage";
import ProfilePage from "../pages/ProfilePage";
import RedirectAuthenticated from "../features/auth/components/RedirectAuthenticated";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import { Outlet } from "react-router-dom";
import Container from "../layouts/Container";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectAuthenticated>
        <LoginPage />
      </RedirectAuthenticated>
    ),
  },
  {
    path: "/",
    element: (
      <>
        <ProtectedRoute>
          <Container />
        </ProtectedRoute>
      </>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/friend",
        element: <FriendPage />,
      },
      {
        path: "/profile/:profileUserId",
        element: <ProfilePage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

export { Outlet };
