import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductModal from "./Modals/ProductModal";

const Layout = ({ children }) => {
  return (
    <>
      <ProductModal />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
