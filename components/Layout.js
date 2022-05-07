import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductModal from "./Modals/ProductModal";
import CashOnDelivery from "./Modals/CashOnDelivery";

const Layout = ({ children }) => {
  return (
    <>
      <ProductModal />
      <CashOnDelivery />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
