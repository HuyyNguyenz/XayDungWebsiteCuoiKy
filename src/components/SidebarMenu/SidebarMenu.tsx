import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

import {
  faHouse,
  faLightbulb,
  faNewspaper,
  faRoad,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarMenu: React.FC = () => {
  const params = useParams();

  useEffect(() => {}, []);

  return (
    <nav className="w-24 hidden lg:block">
      <ul className="select-none sticky top-[4.625rem] left-0 right-0 flex flex-col items-center justify-start px-2 my-3">
        <li>
          <NavLink className="menu_item" to="/">
            <div className="menu_icon">
              <FontAwesomeIcon icon={faHouse} />
            </div>
            <span className="menu_name">Trang chủ</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="menu_item" to="/roadmap">
            <div className="menu_icon">
              <FontAwesomeIcon icon={faRoad} />
            </div>
            <span className="menu_name">Lộ trình</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="menu_item" to="/courses">
            <div className="menu_icon">
              <FontAwesomeIcon icon={faLightbulb} />
            </div>
            <span className="menu_name">Học</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="menu_item" to="/blogs">
            <div className="menu_icon">
              <FontAwesomeIcon icon={faNewspaper} />
            </div>
            <span className="menu_name">Blog</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarMenu;
