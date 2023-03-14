import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Video } from "../../interface";
import Comments from "../../pages/Comments";

interface Props {
  video: Video;
}

const LearningVideo: React.FC<Props> = (props) => {
  const [isOpenComment, setOpenComment] = useState<boolean>(false);
  const { video } = props;

  const handleOpenComment = () => {
    document.body.classList.add("overflow-hidden");
    setOpenComment(true);
  };

  const handleCloseComment = (isClose: boolean) => {
    if (isClose) {
      setOpenComment(false);
    }
  };

  return (
    <div className="flex flex-col items-start justify-start w-full text-text-color">
      {video ? (
        <>
          <Helmet>
            <title>{video.title}</title>
          </Helmet>
          <iframe
            className="w-full h-[32.5rem]"
            src={video.link + "?autoplay=1"}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="px-16 py-8">
            <h2 className="text-28 font-semibold">{video.title}</h2>
            <span className="text-14">Cập nhật ngày {video.date_posted}</span>
            <p className="pt-12 pb-6">{video.description}</p>
            <ul className="list-disc ml-6">
              <li className="mb-4">
                <span className="mr-2">Huyy Nguyễnz:</span>
                <a
                  className="underline text-primary-color font-semibold"
                  href="https://www.facebook.com/nguyenhuydz3"
                  target={"_blank"}
                >
                  https://www.facebook.com/nguyenhuydz3
                </a>
              </li>
              <li className="mb-4">
                <span className="mr-2">Đức Đạt:</span>
                <a
                  className="underline text-primary-color font-semibold"
                  href="https://www.facebook.com/ddat12"
                  target={"_blank"}
                >
                  https://www.facebook.com/ddat12
                </a>
              </li>
              <li className="mb-4">
                <span className="mr-2">Trần Lâm:</span>
                <a
                  className="underline text-primary-color font-semibold"
                  href="https://www.facebook.com/profile.php?id=100042012109180"
                  target={"_blank"}
                >
                  https://www.facebook.com/profile.php?id=100042012109180
                </a>
              </li>
              <li className="mb-4">
                <span className="mr-2">Khang Trương:</span>
                <a
                  className="underline text-primary-color font-semibold"
                  href="https://www.facebook.com/khang.truong.3304"
                  target={"_blank"}
                >
                  https://www.facebook.com/khang.truong.3304
                </a>
              </li>
              <li className="mb-4">
                <span className="mr-2">Tào Huy:</span>
                <a
                  className="underline text-primary-color font-semibold"
                  href="https://www.facebook.com/taoquanghuy"
                  target={"_blank"}
                >
                  https://www.facebook.com/taoquanghuy
                </a>
              </li>
            </ul>
          </div>
          <button
            onClick={handleOpenComment}
            className="fixed bottom-[4%] right-[32%] flex items-center justify-start text-16 font-semibold text-primary-color rounded-full px-3 py-2 shadow-[0_-4px_32px_rgba(0,0,0,0.2)] bg-white select-none"
          >
            <FontAwesomeIcon className="mr-2" icon={faComments} />
            <span>Bình luận</span>
          </button>

          {isOpenComment ? (
            <Comments close={handleCloseComment} video={video} />
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default LearningVideo;
