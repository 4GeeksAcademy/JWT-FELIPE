import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop"; 

export const Layout = () => {
  return (
    <ScrollToTop>
      <Navbar />
      <Outlet />
    </ScrollToTop>
  );
};