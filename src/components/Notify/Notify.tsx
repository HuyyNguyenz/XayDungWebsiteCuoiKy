import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import { useState } from "react";
import NotifyItem from "../NotifyItem";
import logo from "../../assets/images/logo.png";

const Notify: React.FC = () => {
  const [showNotify, setShowNotify] = useState<boolean>(false);

  const handleToggleNotify = () => {
    setShowNotify(!showNotify);
  };

  const handleHideNotify = () => {
    setShowNotify(false);
  };

  return (
    <div>
      <Tippy
        interactive={true}
        visible={showNotify}
        placement={"bottom-end"}
        onClickOutside={handleHideNotify}
        render={(attrs) => (
          <div
            className="rounded-[0.625rem] bg-white shadow-[0_-4px_32px_rgba(0,0,0,0.2)] overflow-hidden animate-fade"
            tabIndex={-1}
            {...attrs}
          >
            <div className="w-[25rem] max-h-[33.5rem] min-h-[3.75rem]">
              <div className="py-4 px-5">
                <h6 className="text-18 text-title-color font-semibold">
                  Thông báo
                </h6>
              </div>
              <div className="max-h-[68vh] overflow-y-auto overscroll-contain">
                <NotifyItem
                  image={logo}
                  content={"Lânn Hồ đã Thích một bình luận của bạn."}
                  time={"1 giờ trước"}
                />
                <NotifyItem
                  image={logo}
                  content={"Lânn Hồ đã Thích một bình luận của bạn."}
                  time={"1 giờ trước"}
                />
                <NotifyItem
                  image={logo}
                  content={"Lânn Hồ đã Thích một bình luận của bạn."}
                  time={"1 giờ trước"}
                />
                <NotifyItem
                  image={logo}
                  content={"Lânn Hồ đã Thích một bình luận của bạn."}
                  time={"1 giờ trước"}
                />
                <NotifyItem
                  image={logo}
                  content={"Lânn Hồ đã Thích một bình luận của bạn."}
                  time={"1 giờ trước"}
                />
                <NotifyItem
                  image={logo}
                  content={"Lânn Hồ đã Thích một bình luận của bạn."}
                  time={"1 giờ trước"}
                />
                <NotifyItem
                  image={logo}
                  content={"Lânn Hồ đã Thích một bình luận của bạn."}
                  time={"1 giờ trước"}
                />
                <NotifyItem
                  image={logo}
                  content={"Lânn Hồ đã Thích một bình luận của bạn."}
                  time={"1 giờ trước"}
                />
                <NotifyItem
                  image={logo}
                  content={"Lânn Hồ đã Thích một bình luận của bạn."}
                  time={"1 giờ trước"}
                />
                <NotifyItem
                  image={logo}
                  content={"Lânn Hồ đã Thích một bình luận của bạn."}
                  time={"1 giờ trước"}
                />
                <NotifyItem
                  image={logo}
                  content={"Lânn Hồ đã Thích một bình luận của bạn."}
                  time={"1 giờ trước"}
                />
              </div>
            </div>
          </div>
        )}
      >
        <button
          onClick={handleToggleNotify}
          className="text-[#707070] lg:mr-4 p-2 hover:text-title-color"
        >
          <FontAwesomeIcon className="text-lg" icon={faBell} />
        </button>
      </Tippy>
    </div>
  );
};

export default Notify;
