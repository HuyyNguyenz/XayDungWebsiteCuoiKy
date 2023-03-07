import {
  faBookmark,
  faBookOpen,
  faCircleInfo,
  faHandHoldingDollar,
  faHouse,
  faLightbulb,
  faNewspaper,
  faRightFromBracket,
  faRightToBracket,
  faRoad,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/images/logo.png";

interface Props {
  menuRef: React.RefObject<HTMLDivElement>;
  overlayRef: React.RefObject<HTMLDivElement>;
}

const SidebarMenuMobile: React.FC<Props> = (props) => {
  const [isLogin, seLogin] = useState<boolean>(false);
  const { menuRef, overlayRef } = props;

  useEffect(() => {
    const mobileMenuItems: NodeList = document.querySelectorAll(
      ".menu_mobile_item"
    ) as NodeList;

    const handleEnableScroll = () => {
      document.body.classList.remove("overflow-hidden");
    };

    Array.from(mobileMenuItems).forEach((item: Node) => {
      const mobileMenuItem: HTMLAnchorElement = item as HTMLAnchorElement;
      mobileMenuItem.addEventListener("click", handleEnableScroll);

      return () => {
        mobileMenuItem.removeEventListener("click", handleEnableScroll);
      };
    });

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        document.body.classList.remove("overflow-hidden");
      } else {
        document.body.classList.add("overflow-hidden");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCloseMenu = () => {
    menuRef.current?.classList.remove("sidebar_menu-open");
    menuRef.current?.classList.add("sidebar_menu-close");
    overlayRef.current?.classList.remove("overlay");
    overlayRef.current?.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <nav className="lg:hidden">
      <div
        ref={menuRef}
        className="fixed top-0 left-0 z-30 bg-white w-[80%] md:w-[60%] h-full sidebar_menu-close"
      >
        <div className="py-4 pl-4 mt-6 md:pl-8 h-full overflow-y-scroll">
          <ul className="menu_mobile_list">
            {isLogin ? (
              <>
                <li className="flex flex-col items-start py-4 pl-4">
                  <div className="w-20 h-20 mb-3">
                    <img
                      className="w-full h-full rounded-full object-cover"
                      src={logo}
                      alt="user_avatar"
                    />
                  </div>
                  <span className="text-16 font-semibold text-text-color">
                    Huyy Nguyễnz
                  </span>
                </li>
                <li className="menu_mobile_item">
                  <div className="mr-4 text-text-color-2">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <span className="tex-16 text-text-color font-medium">
                    Trang cá nhân
                  </span>
                </li>
                <li className="menu_mobile_item">
                  <div className="mr-4 text-text-color-2">
                    <FontAwesomeIcon icon={faBookOpen} />
                  </div>
                  <span className="tex-16 text-text-color font-medium">
                    Khoá học của tôi
                  </span>
                </li>
              </>
            ) : (
              <li className="menu_mobile_item">
                <div className="mr-4 text-text-color-2">
                  <FontAwesomeIcon icon={faRightToBracket} />
                </div>
                <span className="tex-16 text-text-color font-medium">
                  Đăng nhập
                </span>
              </li>
            )}
          </ul>
          <ul className="menu_mobile_list">
            <li>
              <NavLink
                className="menu_mobile_item flex items-center justify-start w-full"
                to="/"
              >
                <div className="mr-4 text-text-color-2">
                  <FontAwesomeIcon icon={faHouse} />
                </div>
                <span className="tex-16 text-text-color font-medium">
                  Trang chủ
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menu_mobile_item flex items-center justify-start w-full"
                to="/roadmap"
              >
                <div className="mr-4 text-text-color-2">
                  <FontAwesomeIcon icon={faRoad} />
                </div>
                <span className="tex-16 text-text-color font-medium">
                  Lộ trình
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menu_mobile_item flex items-center justify-start w-full"
                to="/courses"
              >
                <div className="mr-4 text-text-color-2">
                  <FontAwesomeIcon icon={faLightbulb} />
                </div>
                <span className="tex-16 text-text-color font-medium">
                  Khoá học
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menu_mobile_item flex items-center justify-start w-full"
                to="/blogs"
              >
                <div className="mr-4 text-text-color-2">
                  <FontAwesomeIcon icon={faNewspaper} />
                </div>
                <span className="tex-16 text-text-color font-medium">Blog</span>
              </NavLink>
            </li>
          </ul>
          {isLogin ? (
            <ul className="menu_mobile_list">
              <li className="menu_mobile_item">
                <div className="mr-4 text-text-color-2">
                  <FontAwesomeIcon icon={faBookmark} />
                </div>
                <span className="tex-16 text-text-color font-medium">
                  Bài viết đã lưu
                </span>
              </li>
              <li className="menu_mobile_item">
                <div className="mr-4 text-text-color-2">
                  <FontAwesomeIcon icon={faHandHoldingDollar} />
                </div>
                <span className="tex-16 text-text-color font-medium">
                  Mã giới thiệu của bạn
                </span>
              </li>
            </ul>
          ) : (
            ""
          )}
          <ul className="menu_mobile_list">
            <li className="menu_mobile_item">
              <div className="mr-4 text-text-color-2">
                <FontAwesomeIcon icon={faCircleInfo} />
              </div>
              <span className="tex-16 text-text-color font-medium">
                Giới thiệu
              </span>
            </li>
            <li className="menu_mobile_item">
              <div className="mr-4 text-text-color-2">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <span className="tex-16 text-text-color font-medium">
                Cơ hội việc làm
              </span>
            </li>
          </ul>
          {isLogin ? (
            <ul className="menu_mobile_list">
              <li className="menu_mobile_item">
                <div className="mr-4 text-text-color-2">
                  <FontAwesomeIcon icon={faRightFromBracket} />
                </div>
                <span className="tex-16 text-text-color font-medium">
                  Đăng xuất
                </span>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div
        ref={overlayRef}
        onClick={handleCloseMenu}
        className="hidden overflow-hidden"
      ></div>
    </nav>
  );
};

export default SidebarMenuMobile;
