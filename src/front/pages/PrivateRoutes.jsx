import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  const token = sessionStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/" />;
};