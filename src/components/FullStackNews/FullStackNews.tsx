import { useEffect, useState } from "react";
import {
  faBullhorn,
  faCircleCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import ITGangz from "../../assets/images/ITGangz.jpg";

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

  useEffect(() => {
    if (sessionStorage.getItem("auto") === "true") {
      handleOpenNewsFeed();
      sessionStorage.removeItem("auto");
    }
  }, []);

  return (
    <div className="hidden md:block">
      <Tippy content="Bảng tin ITGangz">
        <div
          onClick={handleOpenNewsFeed}
          className="fixed left-6 bottom-20 w-11 h-11 rounded-full bg-menu-active-color opacity-80 hover:opacity-100 cursor-pointer"
        >
          <FontAwesomeIcon className="center_item" icon={faBullhorn} />
        </div>
      </Tippy>
      {showNews ? (
        <>
          <div className="fixed center_item min-w-[60vw] px-10 py-5 rounded-2xl animate-fade bg-white z-40">
            <div className="flex items-center justify-between pb-2">
              <h2 className="text-24 font-bold text-title-color">
                Bảng Tin ITGangz
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
                  Chào thầy và các bạn đã ghé qua website chúng em 🎉
                </h4>
                <span className="text-13 text-text-color-2">
                  Cập nhật 2 ngày trước
                </span>
                <div className="text-16 text-text-color py-3">
                  <p className="pb-3 leading-8">
                    Lời đầu tiên. Cảm ơn thầy và các bạn đã ghé xem website của
                    chúng em. Thì chủ đề của nhóm em là làm về website học lập
                    trình, hiện tại website có vài chức năng cơ bản như Đăng ký,
                    đăng nhập, validate form đăng ký, tìm kiếm, xem video, bình
                    luận
                  </p>
                  <img
                    className="pb-3 object-cover"
                    src={ITGangz}
                    alt="news_feed_img"
                  />
                  <p className="pb-3">
                    Ngay lúc này, thầy và các bạn có thể vào khóa học để kiểm
                    tra nhé!
                  </p>
                  <p className="pb-3">Cảm ơn thầy và các bạn đã ghé xem 🤞</p>
                  <p className="text-12 pb-3">
                    Đăng bởi:{" "}
                    <span className="italic text-primary-color font-bold">
                      Huy Nguyễn{" "}
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
          <div onClick={handleCloseNewsFeed} className="overlay z-30"></div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default FullStackNews;
