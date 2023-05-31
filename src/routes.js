import CommonLayout from "./pages/common/CommonLayout";
import LoginPage from "./pages/common/LoginPage";
import RegisterPage from "./pages/common/RegisterPage";
import ForgotPasswordPage from "./pages/common/ForgotPasswordPage";

import UHomePage from "./pages/user/UHomePage";
import UProfilePage from "./pages/user/UProfilePage";

import AdminLayout from "./pages/admin/AdminLayout";
import AHomePage from "./pages/admin/HomePage";
import AProductsPage from "./pages/admin/ProductsPage";
import AProfilePage from "./pages/admin/ProfilePage";
import AUsersPage from "./pages/admin/UsersPage";

import UPitchesPage from "./pages/user/UPitchesPage";
import UPitchDetailPage from "./pages/user/UPitchDetailPage";
import NotFoundPage from "./pages/common/NotFoundPage";
import UPitchReservationsPage from "./pages/user/UPitchReservationsPage";

import PrivateRoute from "./auth/PrivateRoute";

const routes = [
  {
    path: "/",
    element: <CommonLayout />,
    children: [
      {
        index: true,
        element: <UHomePage />,
      },
      {
        path: "profile",
        element: <UProfilePage />,
        requiredRole: "user",
      },
      {
        path: "pitches/:il/:ilce/:tip",
        element: <UPitchesPage />,
      },
      {
        path: "pitchdetail/:id",
        element: <UPitchDetailPage />,
      },
      {
        path: "pitchreservation/:id",
        element: <UPitchReservationsPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPasswordPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    requiredRole: "admin",
    children: [
      {
        index: true,
        element: <AHomePage />,
      },

      {
        path: "products",
        element: <AProductsPage />,
      },
      {
        path: "profile",
        element: <AProfilePage />,
      },
      {
        path: "users",
        element: <AUsersPage />,
      },
    ],
  },
];


const authMap = (routes) =>
  routes.map((route) => {
    if (route?.requiredRole) {
      route.element = (
        <PrivateRoute requiredRole={route?.requiredRole}>
          {route.element}
        </PrivateRoute>
      );
    }

    if (route?.children) {
      route.children = authMap(route.children);
    }
    
    return route;
  });

export default authMap(routes);
