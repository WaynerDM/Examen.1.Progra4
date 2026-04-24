import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "@tanstack/react-router";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;