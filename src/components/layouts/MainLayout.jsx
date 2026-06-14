import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;