import Tippy from "@tippyjs/react/headless";
import { useState } from "react";
import { User } from "../../interface";

interface Props {
  data: User;
}

const UserSetting: React.FC<Props> = (props) => {
  const [showUserSetting, setShowUserSetting] = useState<boolean>(false);
  const { data } = props;

  const handleToggleUserSetting = () => {
    setShowUserSetting(!showUserSetting);
  };

  const handleHideUserSetting = () => {
    setShowUserSetting(false);
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
            className="w-60 px-6 py-2 rounded-[0.625rem] bg-white shadow-[0_-4px_32px_rgba(0,0,0,0.2)] animate-fade"
            tabIndex={-1}
            {...attrs}
          >
            <div className="flex items-center justify-start">
              <div className="w-12 h-12 my-[0.625rem]">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={data.image}
                  alt="user_img"
                />
              </div>
              <div className="flex-1 ml-3">
                <span className="inline-block text-16 font-semibold text-text-color">
                  {data.firstName} {data.lastName}
                </span>
                <span className="inline-block text-14 text-text-color-2">
                  {data.username}
                </span>
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
              <li className="setting_item">Đăng xuất</li>
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
            src={data.image}
            alt="user_avatar"
          />
        </div>
      </Tippy>
    </div>
  );
};

export default UserSetting;
