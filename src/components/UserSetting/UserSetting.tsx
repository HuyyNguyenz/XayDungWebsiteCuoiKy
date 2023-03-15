import Tippy from "@tippyjs/react/headless";
import { useState } from "react";
import { User } from "../../interface";
import userImg from "../../assets/images/user.png";
import { root } from "../../utils";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface Props {
  data: User;
}

const UserSetting: React.FC<Props> = (props) => {
  const [showUserSetting, setShowUserSetting] = useState<boolean>(false);
  const { data } = props;
  const navigate: NavigateFunction = useNavigate();

  const handleToggleUserSetting = () => {
    setShowUserSetting(!showUserSetting);
  };

  const handleHideUserSetting = () => {
    setShowUserSetting(false);
  };

  const handleLogOut = () => {
    sessionStorage.removeItem("user_token");
    navigate("/login");
  };

  return (
    <div className="hidden lg:block">
      <Tippy
        interactive={true}
        visible={showUserSetting}
        placement={"bottom-end"}
        onClickOutside={handleHideUserSetting}
        render={(attrs) => (
          <div
            className="min-w-60 px-6 py-2 rounded-[0.625rem] bg-white shadow-[0_-4px_32px_rgba(0,0,0,0.2)] animate-fade"
            tabIndex={-1}
            {...attrs}
          >
            <div className="flex items-center justify-start">
              <div className="w-12 h-12 my-[0.625rem]">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={userImg}
                  alt={data.username}
                />
              </div>
              <div className="flex flex-1 ml-3 flex-col items-start justify-start">
                <span className=" text-16 font-semibold text-text-color">
                  {data.username}
                </span>
                <span className=" text-14 text-text-color-2">{data.email}</span>
              </div>
            </div>
            <hr className="line" />
            <ul>
              <li className="setting_item">Trang cá nhân</li>
              <hr className="line" />
              <li className="setting_item">Viết blog</li>
              <li className="setting_item">Bài viết của tôi</li>
              <hr className="line" />
              <li className="setting_item">Bài viết đã lưu</li>
              <li className="setting_item">Mã giới thiệu của bạn</li>
              <hr className="line" />
              <li className="setting_item">Cài đặt</li>
              <li
                onClick={handleLogOut}
                className="setting_item cursor-pointer"
              >
                Đăng xuất
              </li>
            </ul>
          </div>
        )}
      >
        <div
          onClick={handleToggleUserSetting}
          className="cursor-pointer w-8 h-8"
        >
          <img
            className="w-full h-full rounded-full"
            src={userImg}
            alt={data.username}
          />
        </div>
      </Tippy>
    </div>
  );
};

export default UserSetting;
