import { useEffect, useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Video } from "../../interface";

interface Props {
  closeVideo: Function;
  video: Video;
  courseName: string;
}

const CourseVideoPreview: React.FC<Props> = (props) => {
  const { video, courseName } = props;
  const [isCloseVideo, setCloseVideo] = useState<boolean>(false);

  const handleCloseVideo = () => {
    setCloseVideo(true);
    props.closeVideo(true);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <>
      {isCloseVideo ? (
        ""
      ) : (
        <>
          <div className="fixed center_item min-w-[60vw] px-10 py-5 rounded-2xl animate-fade bg-white z-40">
            <div className="flex items-center justify-between pb-2">
              <h2 className="text-24 font-bold text-title-color">
                Giới thiệu khoá học
              </h2>
              <div
                onClick={handleCloseVideo}
                className="text-18 text-text-color-2 cursor-pointer p-2 hover:text-text-color"
              >
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>

            <div className="h-[70vh] pr-4">
              <div className="flex flex-col items-start justify-start border-b border-solid border-border-color mt-6 h-full">
                <h4 className="text-18 font-semibold text-title-color mb-6">
                  {courseName}
                </h4>
                <iframe
                  className="w-full h-full"
                  src={video.link + "?autoplay=1"}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div onClick={handleCloseVideo} className="overlay z-30"></div>
        </>
      )}
    </>
  );
};

export default CourseVideoPreview;
