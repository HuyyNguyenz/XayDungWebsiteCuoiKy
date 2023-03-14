import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { root } from "../../utils";
import { NavigateFunction, useParams } from "react-router-dom";
import { PartVideo, Video, Course } from "../../interface";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate } from "react-router-dom";
import logoITGangz from "../../assets/images/logo.png";
import ListCourseVideo from "../../components/ListCourseVideo";
import LearningVideo from "../../components/LearningVideo";

const LearningCourse: React.FC = () => {
  const [isLogin, setLogin] = useState<boolean>(
    !!sessionStorage.getItem("user_token")
  );
  const navigate: NavigateFunction = useNavigate();
  const [course, setCourse] = useState<Course>({
    id: "",
    name: "",
    price: 0,
    price_sale: 0,
    image: "",
    description: "",
    category_id: "",
  });
  const [partsVideo, setPartsVideo] = useState<Array<PartVideo>>([]);
  const [videos, setVideos] = useState<Array<Video>>([]);
  const [videoPlay, setVideoPlay] = useState<Video>({
    id: "",
    title: "",
    description: "",
    link: "",
    duration: "",
    date_posted: "",
    part_id: "",
  });
  const { courseId } = useParams();

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    if (partsVideo.length > 0) {
      const partVideo: HTMLLIElement = document.querySelectorAll(
        ".part_video"
      )[0] as HTMLLIElement;
      partVideo.click();
    }
  }, [partsVideo.length]);

  useEffect(() => {
    const getCourses = async () => {
      await axios.get(`${root}/api/courses`).then((res) => {
        if (res.data.data.length > 0) {
          res.data.data.forEach((course: Course) => {
            if (course.id + "" === courseId) {
              setCourse(course);
            }
          });
        }
      });
    };
    getCourses();
  }, [courseId]);

  useEffect(() => {
    const getPartsVideo = async () => {
      await axios.get(`${root}/api/parts-video`).then((res) => {
        if (res.data.length > 0) {
          const partVideoArray: Array<PartVideo> = [];
          res.data.forEach((partVideo: PartVideo) => {
            if (partVideo.course_id + "" === courseId) {
              partVideoArray.push(partVideo);
            }
          });
          setPartsVideo([...partVideoArray]);
        }
      });
    };
    getPartsVideo();
  }, [courseId]);

  useEffect(() => {
    if (partsVideo.length > 0) {
      const videoArray: Array<Video> = [];
      partsVideo.forEach((partVideo: PartVideo) => {
        const getVideos = async () => {
          await axios.get(`${root}/api/videos`).then((res) => {
            if (res.data.length > 0) {
              res.data.forEach((video: Video) => {
                if (video.part_id === partVideo.id) {
                  videoArray.push(video);
                }
              });
              setVideos([...videoArray]);
            }
          });
        };
        getVideos();
      });
    }
  }, [partsVideo.length, courseId]);

  const checkVideo: (id: string) => Array<Video> = (id) => {
    let newArray: Array<Video> = [];
    videos.forEach((video: Video) => {
      if (video.part_id === id) {
        newArray.push(video);
      }
    });
    return newArray;
  };

  const handleOpenListVideo = (id: string) => {
    const e: HTMLElement = document.getElementsByClassName(
      id
    )[0] as HTMLElement;
    const partId: string = e.className.split(" ")[1];
    if (partId === id) {
      e.classList.toggle("hidden");
    }
  };

  const handlePlayVideo = (data: Video) => {
    setVideoPlay(data);
  };

  return (
    <div className="font-montserrat">
      <div className="fixed top-0 left-0 w-full bg-[#29303b] py-2 px-7 text-14 text-white flex items-center justify-between">
        <div className="flex items-center justify-start">
          <NavLink to={"/"}>
            <img
              className="w-10 h-10 rounded-lg object-cover mr-4"
              src={logoITGangz}
              alt="logo"
            />
          </NavLink>
          <h1 className="font-bold">{course.name}</h1>
        </div>
        <span>
          Tổng <strong>{videos.length}</strong> bài học
        </span>
      </div>

      <div className="fixed right-0 top-0 mt-16 w-[30%] text-text-color text-16 font-semibold">
        <h2 className="py-4 px-6">Nội dung khoá học</h2>
        <ul className="h-[calc(100vh-120px)] overflow-y-scroll">
          {partsVideo
            .sort((a: PartVideo, b: PartVideo) => {
              const id1: number = Number(a.id.split("-")[1]);
              const id2: number = Number(b.id.split("-")[1]);
              if (id1 > id2) {
                return 1;
              } else {
                return -1;
              }
            })
            .map((partVideo: PartVideo) => {
              const count: number = checkVideo(partVideo.id).length;
              const listVideo: Array<Video> = checkVideo(partVideo.id);
              return (
                <Fragment key={partVideo.id}>
                  <li
                    onClick={() => handleOpenListVideo(partVideo.id)}
                    className="bg-[#f7f8fa] cursor-pointer py-2 px-6 hover:bg-[#edeff1] border-b border-solid border-[#dedfe0] select-none part_video"
                  >
                    <div className="flex items-center justify-between">
                      <span>{partVideo.name}</span>
                      <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                    <span className="text-14 font-normal">
                      Có <strong>{count}</strong> bài học
                    </span>
                  </li>
                  <ListCourseVideo
                    videos={listVideo}
                    partId={partVideo.id}
                    videoPlay={handlePlayVideo}
                  />
                </Fragment>
              );
            })}
        </ul>
      </div>

      <div className="mt-14 w-[70%]">
        <LearningVideo video={videoPlay.title === "" ? videos[0] : videoPlay} />
      </div>
    </div>
  );
};

export default LearningCourse;
