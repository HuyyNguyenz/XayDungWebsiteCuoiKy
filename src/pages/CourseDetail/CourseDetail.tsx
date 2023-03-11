import DefaultLayout from "../../layouts/DefaultLayout";
import { useState, useEffect } from "react";
import { Course, PartVideo, Video } from "../../interface";
import axios from "axios";
import { root } from "../../utils";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBatteryFull,
  faCirclePlay,
  faFilm,
  faPalette,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import CourseVideoPreview from "../../components/CourseVideoPreview";
import { Helmet } from "react-helmet";

const CourseDetail = () => {
  const [isOpenVideo, setOpenVideo] = useState<boolean>(false);
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
  const { courseId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getCourses = async () => {
      await axios.get(`${root}/api/courses`).then((res) => {
        if (res.data.data.length > 0) {
          res.data.data.map((course: Course) => {
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
          res.data.map((partVideo: PartVideo) => {
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
      partsVideo.map((partVideo: PartVideo) => {
        const getVideos = async () => {
          await axios.get(`${root}/api/videos`).then((res) => {
            if (res.data.length > 0) {
              res.data.map((video: Video) => {
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
    videos.map((video: Video) => {
      if (video.part_id === id) {
        newArray.push(video);
      }
    });
    return newArray;
  };

  const handleOpenVideo = () => {
    document.body.classList.add("overflow-hidden");
    setOpenVideo(true);
  };

  const handleCloseVideo = (isCloseVideo: boolean) => {
    if (isCloseVideo === true) {
      setOpenVideo(false);
    }
  };

  return (
    <DefaultLayout>
      <Helmet>
        <title>{course.name} tại ITGangz</title>
      </Helmet>
      <div className="flex-1 p-4 mb-20 md:px-8 lg:px-12 w-full overflow-hidden">
        <div className="flex items-start justify-between">
          <div className="flex flex-1 flex-col items-start justify-start mr-16 w-full">
            <h1 className="text-32 font-bold text-title-color py-4">
              {course.name}
            </h1>
            <span className="text-14 text-text-color">
              {course.description}
            </span>
            <h2 className="text-20 font-bold text-title-color mt-6 mb-4">
              Nội dung khoá học
            </h2>
            <div className="flex items-center justify-between w-full mb-4">
              <div className="flex items-center justify-start text-14 text-text-color">
                <span className="mr-4">
                  <strong>{partsVideo.length}</strong> chương
                </span>
                <span>
                  <strong>{videos.length}</strong> bài học
                </span>
              </div>
              <span className="text-14 text-primary-color font-semibold cursor-pointer hover:opacity-90">
                Mở rộng tất cả
              </span>
            </div>
            <div className="w-full">
              <ul>
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
                    return (
                      <li
                        key={partVideo.id}
                        className="flex items-center justify-between bg-[#f5f5f5] py-3 px-8 rounded-md cursor-pointer mb-2"
                      >
                        <div className="text-16 font-semibold text-text-color">
                          <FontAwesomeIcon className="mr-4" icon={faPlus} />
                          <span>{partVideo.name}</span>
                        </div>
                        <span className="text-14 text-text-color">
                          {count} bài học
                        </span>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className="w-[30%] flex flex-col items-center justify-start">
            <div
              onClick={handleOpenVideo}
              className="relative rounded-2xl overflow-hidden cursor-pointer select-none"
            >
              <img
                className="object-cover"
                src={`${root}/users/image/${course.image}`}
                alt={course.name}
              />
              <div className="bg-gradient-to-t from-[#1e1e1ce6] to-[#1e1e1c00] center_item w-full h-full"></div>
              <div className="center_item flex flex-col items-center justify-end w-full h-full text-white">
                <FontAwesomeIcon className="text-60" icon={faCirclePlay} />
                <span className="text-16 font-semibold my-7">
                  Xem giới thiệu khoá học
                </span>
              </div>
            </div>
            <h5 className="text-32 font-normal text-primary-color my-4">
              Miễn phí
            </h5>
            <button className="min-w-[11.25rem] text-16 font-semibold py-2 px-4 bg-primary-color text-white rounded-full mb-4 hover:opacity-90">
              VÀO HỌC
            </button>
            <ul className="text-14 text-text-color">
              <li className="mb-2">
                <FontAwesomeIcon icon={faPalette} />
                <span className="ml-2">Trình độ cơ bản</span>
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faFilm} />
                <span className="ml-2">
                  Tổng số <strong>{videos.length}</strong> bài học
                </span>
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faBatteryFull} />
                <span className="ml-2">Học mọi lúc mọi nơi</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isOpenVideo ? (
        <CourseVideoPreview
          closeVideo={handleCloseVideo}
          video={videos[0]}
          courseName={course.name}
        />
      ) : (
        ""
      )}
    </DefaultLayout>
  );
};

export default CourseDetail;
