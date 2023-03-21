import CommonLayout from "./pages/common/CommonLayout";
import LoginPage from "./pages/common/LoginPage";
import RegisterPage from "./pages/common/RegisterPage";

import UHomePage from "./pages/user/UHomePage";
import UProfilePage from "./pages/user/UProfilePage";

import AdminLayout from "./pages/admin/AdminLayout";
import AHomePage from "./pages/admin/HomePage";
import AProductsPage from "./pages/admin/ProductsPage";
import AProfilePage from "./pages/admin/ProfilePage";
import AUsersPage from "./pages/admin/UsersPage";
import AReservationsPage from "./pages/admin/AReservationsPage";
import APitchesPage from "./pages/admin/APitchesPage";
import ACalendarPage from "./pages/admin/ACalendarPage";
import ACommentsPage from "./pages/admin/ACommentsPage";
import AManagementPage from "./pages/admin/AManagementPage";


import PrivateRoot from "./auth/PrivateRoute";
import AdminRoute from "./auth/AdminRoute";
import UPitchesPage from "./pages/user/UPitchesPage";
import UPitchDetailPage from "./pages/user/UPitchDetailPage";
import UReservationsPage from "./pages/user/UReservationsPage";

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
        auth: true,
      },
      {
        path: "reservations",
        element: <UReservationsPage />,
        auth: true,
      },
      {
        path: "pitches",
        element: <UPitchesPage />,
      },
      {
        path: "pitchDetail/:pitchId",
        element: <UPitchDetailPage />,
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
    path: "/admin",
    element: <AdminLayout />,
    // admin: true,
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
      {
        path: "randevular",
        element: <AReservationsPage/>,
      },
      {
        path: "spor-alanlari",
        element: <APitchesPage/>,
      },
      {
        path: "takvim",
        element: <ACalendarPage/>,
      },
      {
        path: "yorumlar",
        element: <ACommentsPage/>,
      },
      {
        path: "kurum-yonetimi",
        element: <AManagementPage/>,
      },
    ],
  },
];

const authMap = (routes) =>
  routes.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoot>{route.element}</PrivateRoot>;
    }
    if (route?.admin) {
      route.element = <AdminRoute>{route.element}</AdminRoute>;
    }
    if (route?.children) {
      route.children = authMap(route.children);
    }
    return route;
  });

export default authMap(routes);
