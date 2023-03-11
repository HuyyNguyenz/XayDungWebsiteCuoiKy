import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/images/logo.png";
import { User } from "../../interface";
import Notify from "../Notify";
import Search from "../Search";
import SidebarMenuMobile from "../SidebarMenuMobile";
import UserSetting from "../UserSetting";
import axios from "axios";
import { root } from "../../utils";

const Header: React.FC = () => {
  const [isLogin, setLogin] = useState<boolean>(
    !!sessionStorage.getItem("user_token")
  );
  const [userData, setUserData] = useState<User>({
    username: "",
    email: "",
    password: "",
    image: "",
    role_id: "",
    firstName: "",
    lastName: "",
  });
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleOpenMenu = () => {
    menuRef.current?.classList.remove("sidebar_menu-close");
    menuRef.current?.classList.add("sidebar_menu-open");
    overlayRef.current?.classList.remove("hidden");
    overlayRef.current?.classList.add("overlay");
    document.body.classList.add("overflow-hidden");
  };

  useEffect(() => {
    const user_token: string = sessionStorage.getItem("user_token") as string;
    const getUserData = async () => {
      await axios
        .post(`${root}/api/account`, { id: user_token })
        .then((res) => {
          const data: User = res.data && {
            username: res.data.username,
            email: res.data.email,
            password: res.data.password,
            image: res.data.image,
            role_id: res.data.role_id,
            firstName: res.data.first_name,
            lastName: res.data.last_name,
          };
          setUserData(data);
        });
    };
    getUserData();
  }, []);

  return (
    <header className="sticky top-0 left-0 right-0 z-30 bg-white">
      <div className="flex items-center justify-between border-b border-solid border-border-color px-4 md:px-8 lg:px-7">
        <div className="hidden lg:flex items-center">
          <NavLink to="/">
            <img
              className="w-10 h-10 rounded-lg object-cover cursor-pointer"
              src={logo}
              alt="logo"
            />
          </NavLink>
          <div className="pl-4 py-5">
            <h4 className="text-title-color font-bold text-14">
              Học Lập Trình Cùng ITGangz
            </h4>
          </div>
        </div>
        {/* Menu mobile */}
        <div
          onClick={handleOpenMenu}
          className="py-5 text-18 cursor-pointer text-text-color-2 lg:hidden"
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
        <Search />
        {isLogin ? (
          <div className="flex items-center">
            <div className="py-2 px-3 cursor-pointer text-[#707070] hover:text-text-color md:hidden">
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <button className="text-14 text-title-color font-semibold mr-5 p-2 hidden lg:block">
              Khoá học của tôi
            </button>
            <Notify />
            <UserSetting data={userData} />
          </div>
        ) : (
          <div className="flex items-center justify-start">
            <div className="py-2 px-3 mr-4 cursor-pointer text-[#707070] hover:text-text-color md:hidden">
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <Link
              to="/login"
              className="text-14 font-semibold text-white bg-primary-color px-5 py-[0.375rem] rounded-full hover:opacity-90"
            >
              Đăng nhập
            </Link>
          </div>
        )}
      </div>
      <SidebarMenuMobile menuRef={menuRef} overlayRef={overlayRef} />
    </header>
  );
};
export default Header;
