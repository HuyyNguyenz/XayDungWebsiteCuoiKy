import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import FullStackNews from "../../components/FullStackNews";
import Header from "../../components/Header";
import SidebarMenu from "../../components/SidebarMenu";

interface Props {
  children?: React.ReactNode;
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  const [isLogin, setLogin] = useState<boolean>(
    !!sessionStorage.getItem("user_token")
  );

  return (
    <div className="font-montserrat">
      <Header />
      <div className="flex justify-start">
        <SidebarMenu />
        {children}
      </div>
      <Footer />
      {isLogin ? <FullStackNews /> : ""}
    </div>
  );
};

export default DefaultLayout;
