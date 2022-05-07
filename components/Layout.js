import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductModal from "./Modals/ProductModal";
import CashOnDelivery from "./Modals/CashOnDelivery";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  console.log(router.pathname === ("/login" || "/register"));

  return (
    <>
      <ProductModal />
      <CashOnDelivery />
      {router.pathname === "/login" || router.pathname === "/register" || (
        <Navbar />
      )}
      {children}
      {router.pathname === "/login" || router.pathname === "/register" || (
        <Footer />
      )}
    </>
  );
};

export default Layout;
