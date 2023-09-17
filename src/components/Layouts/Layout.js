import MainFooter from "../common/footer/MainFooter";
import MainHeder from "../common/header/MainHeder";

const Layout = ({ children }) => {
  return (
    <>
      <MainHeder />
      {children}
      <MainFooter />
    </>
  );
};

export default Layout;
