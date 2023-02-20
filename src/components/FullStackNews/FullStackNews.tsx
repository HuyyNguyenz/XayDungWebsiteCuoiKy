import { useState } from "react";
import {
  faBullhorn,
  faCircleCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const FullStackNews: React.FC = () => {
  const [showNews, setShowNews] = useState<boolean>(false);

  const handleOpenNewsFeed = () => {
    setShowNews(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleCloseNewsFeed = () => {
    setShowNews(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div className="hidden md:block">
      <Tippy content="Bảng tin F8">
        <div
          onClick={handleOpenNewsFeed}
          className="fixed left-6 bottom-20 w-11 h-11 rounded-full bg-menu-active-color opacity-80 hover:opacity-100"
        >
          <FontAwesomeIcon className="center_item" icon={faBullhorn} />
        </div>
      </Tippy>
      {showNews ? (
        <>
          <div className="fixed center_item min-w-[60vw] px-10 py-5 rounded-2xl animate-fade bg-white z-30">
            <div className="flex items-center justify-between pb-2">
              <h2 className="text-24 font-bold text-title-color">
                Bảng Tin F8
              </h2>
              <div
                onClick={handleCloseNewsFeed}
                className="text-18 text-text-color-2 cursor-pointer p-2 hover:text-text-color"
              >
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>

            <div className="max-h-[70vh] overflow-y-auto overscroll-contain pr-4">
              <div className="flex flex-col items-start justify-start border-b border-solid border-border-color mt-6">
                <h4 className="text-18 font-semibold text-title-color">
                  Lỗi video load chậm đã được fix 🎉
                </h4>
                <span className="text-13 text-text-color-2">2 ngày trước</span>
                <div className="text-16 text-text-color py-3">
                  <p className="pb-3 leading-8">
                    Lời đầu tiên, F8 gửi lời xin lỗi tới toàn thể các bạn học
                    viên khóa học HTML CSS Pro, vì thời gian qua đã để xảy ra
                    tình trạng video load chậm. Hiện tại vấn đề đã được khắc
                    phục, các bạn có thể xem video độ phân giải 2K/1440p chỉ với
                    tốc độ mạng trung bình.
                  </p>
                  <img
                    className="pb-3"
                    src="https://files.fullstack.edu.vn/f8-prod/public-images/63bb98c580f8d.png"
                    alt="news_feed_img"
                  />
                  <p className="pb-3">
                    Ngay lúc này, các bạn có thể vào khóa học để kiểm tra nhé!
                  </p>
                  <p className="pb-3">
                    Cảm ơn các bạn đã tin tưởng và đồng hành cùng F8 🤞
                  </p>
                  <p className="text-12 pb-3">
                    Đăng bởi:{" "}
                    <span className="italic text-primary-color font-bold">
                      Sơn Đặng{" "}
                      <FontAwesomeIcon
                        className="text-create-blog-btn-color"
                        icon={faCircleCheck}
                      />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div onClick={handleCloseNewsFeed} className="overlay"></div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default FullStackNews;
