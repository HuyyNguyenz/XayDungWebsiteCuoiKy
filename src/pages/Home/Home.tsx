import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { Course, PostsType } from "../../interface";
import DefaultLayout from "../../layouts/DefaultLayout";
import SliderAds from "../../components/SliderAds";
import PayCourse from "../../components/PayCourse";
import FreeCourse from "../../components/FreeCourse";
import Posts from "../../components/Posts";
import htmlCssProImg from "../../assets/images/pay_course.png";
import htmlCssImg from "../../assets/images/free_course.png";
import postImg from "../../assets/images/post.png";
import logo from "../../assets/images/logo_F8.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Home: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const loading = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => {
      clearTimeout(loading);
    };
  }, []);

  const htmlCssPro: Course = {
    name: "HTML CSS Pro",
    price: 2499000,
    priceSale: 1299000,
    image: htmlCssProImg,
    subscribers: 0,
  };

  const htmlCss: Course = {
    name: "HTML CSS từ Zero đến Hero",
    price: 0,
    priceSale: 0,
    image: htmlCssImg,
    subscribers: 145167,
  };

  const posts: PostsType = {
    title: "[Phần 1] Tạo dự án ReactJS với Webpack và Babel",
    author: {
      email: "sondn@gmail.com",
      firstName: "Sơn",
      lastName: "Đặng",
      username: "sondn@gmail.com",
      image: logo,
      role: "admin",
    },
    image: postImg,
    views: 100,
  };

  return (
    <DefaultLayout>
      {isLoading ? (
        ""
      ) : (
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
                <PayCourse course={htmlCssPro} />
                <PayCourse course={htmlCssPro} />
                <PayCourse course={htmlCssPro} />
                <PayCourse course={htmlCssPro} />
                <PayCourse course={htmlCssPro} />
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
                <FreeCourse course={htmlCss} />
                <FreeCourse course={htmlCss} />
                <FreeCourse course={htmlCss} />
                <FreeCourse course={htmlCss} />
                <FreeCourse course={htmlCss} />
              </div>
            </div>
          </section>
          {/* Featured Posts */}
          <section className="mt-14">
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
          </section>
        </div>
      )}
    </DefaultLayout>
  );
};

export default Home;
