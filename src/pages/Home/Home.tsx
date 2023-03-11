import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

import { Course } from "../../interface";
import DefaultLayout from "../../layouts/DefaultLayout";
import SliderAds from "../../components/SliderAds";
import PayCourse from "../../components/PayCourse";
import FreeCourse from "../../components/FreeCourse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { root } from "../../utils";

const Home: React.FC = () => {
  const [payCourses, setPayCourses] = useState<Array<Course>>([]);
  const [freeCourses, setFreeCourses] = useState<Array<Course>>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const payCourses: Array<Course> = [];
    const freeCourses: Array<Course> = [];

    const getCourses = async () => {
      await axios.get(`${root}/api/courses`).then((res) => {
        res.data.data.map((item: Course) => {
          if (Number(item.price) > 0) {
            payCourses.push(item);
            setPayCourses(payCourses);
          } else {
            freeCourses.push(item);
            setFreeCourses(freeCourses);
          }
        });
      });
    };
    getCourses();
  }, []);

  // const posts: PostsType = {
  //   title: "[Phần 1] Tạo dự án ReactJS với Webpack và Babel",
  //   author: {
  //     email: "nguyenhuydz3@gmail.com",
  //     firstName: "Huy",
  //     lastName: "Nguyễn",
  //     username: "nguyenhuydz3@gmail.com",
  //     image: logo,
  //     role: "admin",
  //     password: "",
  //   },
  //   image: postImg,
  //   views: 100,
  // };

  return (
    <DefaultLayout>
      <Helmet>
        <title>Học lập trình cùng ITGangz</title>
      </Helmet>
      <div className="flex-1 p-4 mb-20 md:px-8 lg:pl-5 lg:pr-10 w-full overflow-hidden">
        <SliderAds />
        {/* Pay Courses */}
        <section className="mt-20">
          <div className="flex flex-col items-start justify-start">
            <div className="flex items-center justify-start mb-4">
              <h2 className="text-24 font-black text-title-color">
                Khoá học Pro
              </h2>
              <span className="text-12 text-white font-medium uppercase ml-2 bg-blue-color rounded p-1">
                Mới
              </span>
            </div>
            <div className="flex items-center w-full overflow-y-hidden overflow-x-scroll md:flex-none md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {payCourses.map((course) => {
                return <PayCourse key={course.id} course={course} />;
              })}
            </div>
          </div>
        </section>
        {/* Free Courses */}
        <section className="mt-14">
          <div className="flex flex-col items-start justify-start">
            <div className="w-full flex items-center justify-between mb-4">
              <h2 className="text-24 font-black text-title-color">
                Khoá học miễn phí
              </h2>
              <NavLink to="/roadmap">
                <div className="group flex items-center justify-start text-primary-color text-15 font-semibold cursor-pointer hover:underline">
                  <span className="mr-1 hidden md:inline-block">
                    Xem lộ trình
                  </span>
                  <div className="hidden md:inline-block group-hover:translate-x-1 transition-all ease-linear duration-150">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </div>
                  <div className="text-20 md:hidden">
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="flex items-center w-full overflow-y-hidden overflow-x-scroll md:flex-none md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {freeCourses.map((course) => {
                return (
                  <NavLink key={course.id} to={`/courses/${course.id}`}>
                    <FreeCourse course={course} />
                  </NavLink>
                );
              })}
            </div>
          </div>
        </section>
        {/* Featured Posts */}
        {/* <section className="mt-14">
            <div className="flex flex-col items-start justify-start">
              <div className="w-full flex items-center justify-between mb-4">
                <h2 className="text-24 font-black text-title-color">
                  Bài viết nổi bật
                </h2>
                <div className="group flex items-center justify-start text-primary-color text-15 font-semibold cursor-pointer hover:underline">
                  <span className="mr-1 hidden md:inline-block">
                    Xem tất cả
                  </span>
                  <div className="hidden md:inline-block group-hover:translate-x-1 transition-all ease-linear duration-150">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </div>
                  <div className="text-20 md:hidden">
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                  </div>
                </div>
              </div>
              <div className="flex items-center w-full overflow-y-hidden overflow-x-scroll md:flex-none md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                <Posts posts={posts} />
                <Posts posts={posts} />
                <Posts posts={posts} />
                <Posts posts={posts} />
                <Posts posts={posts} />
              </div>
            </div>
          </section> */}
      </div>
    </DefaultLayout>
  );
};

export default Home;
