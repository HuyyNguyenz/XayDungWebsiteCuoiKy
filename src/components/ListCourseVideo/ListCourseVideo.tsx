import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Video } from "../../interface";

interface Props {
  videos: Array<Video>;
  videoPlay?: any;
  partId: string;
}

const ListCourseVideo: React.FC<Props> = (props) => {
  const { videos, partId } = props;

  useEffect(() => {
    if (videos.length > 0) {
      const videoList: HTMLLIElement = document.querySelectorAll(
        ".video"
      )[0] as HTMLLIElement;
      videoList.classList.add("bg-[#dedfe0]");
    }
  }, [videos.length]);

  const handlePlayVideo = (video: Video) => {
    props.videoPlay(video);
    const videoList: NodeList = document.querySelectorAll(".video");
    videoList.forEach((item: Node) => {
      const videoItem: HTMLLIElement = item as HTMLLIElement;
      if (videoItem.classList.contains("bg-[#dedfe0]")) {
        videoItem.classList.remove("bg-[#dedfe0]");
      }
    });

    const videoItemActive: HTMLLIElement = document.getElementsByClassName(
      video.id
    )[0] as HTMLLIElement;
    videoItemActive.classList.add("bg-[#dedfe0]");
  };

  return (
    <div className={`w-full ${partId} hidden`}>
      <ul>
        {videos.length > 0
          ? videos.map((video: Video) => {
              return (
                <li
                  onClick={() => handlePlayVideo(video)}
                  key={video.id}
                  className={`flex items-center justify-between py-3 px-8 mb-2 cursor-pointer hover:bg-[#dedfe0] video ${video.id}`}
                >
                  <div className="text-14 text-text-color">
                    <FontAwesomeIcon
                      className="opacity-60"
                      icon={faCirclePlay}
                    />
                    <span className="ml-4">{video.title}</span>
                  </div>
                  <span className="text-14 text-text-color">
                    {video.duration}
                  </span>
                </li>
              );
            })
          : ""}
      </ul>
    </div>
  );
};

export default ListCourseVideo;
