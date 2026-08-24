


import { Outlet } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;