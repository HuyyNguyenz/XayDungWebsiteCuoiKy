import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { Course } from "../../interface";
import DefaultLayout from "../../layouts/DefaultLayout";
import htmlCssProImg from "../../assets/images/pay_course.png";
import htmlCssImg from "../../assets/images/free_course.png";
import bannerFbGroup from "../../assets/images/fb-group-card.png";
import PayCourse from "../../components/PayCourse";
import FreeCourse from "../../components/FreeCourse";

const Courses: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(true);

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

  useEffect(() => {
    window.scrollTo(0, 0);
    const loading = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => {
      clearTimeout(loading);
    };
  }, []);

  return (
    <DefaultLayout>
      {isLoading ? (
        ""
      ) : (
        <div className="flex-1 p-4 mb-20 md:px-8 lg:px-12 w-full overflow-hidden">
          <section>
            <div className="mb-20">
              <h1 className="text-28 font-black text-title-color mb-4">
                Khoá học
              </h1>
              <p className="text-15 text-text-color">
                Các khóa học được thiết kế phù hợp cho cả người mới, nhiều khóa
                học miễn phí, chất lượng, nội dung dễ hiểu.
              </p>
            </div>

            <div className="mb-10">
              <div className="flex items-center justify-start mb-4">
                <h2 className="text-24 text-title-color font-black">
                  Khoá học Pro
                </h2>
                <span className="uppercase text-12 font-medium text-white p-1 rounded bg-blue-color ml-2">
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

            <div className="mb-10">
              <h2 className="text-24 text-title-color font-black mb-4">
                Khoá học miễn phí
              </h2>

              <div className="flex items-center w-full overflow-y-hidden overflow-x-scroll md:flex-none md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                <FreeCourse course={htmlCss} />
                <FreeCourse course={htmlCss} />
                <FreeCourse course={htmlCss} />
                <FreeCourse course={htmlCss} />
                <FreeCourse course={htmlCss} />
              </div>
            </div>

            <div className="flex items-center justify-between p-4">
              <div className="flex flex-col items-start w-full md:w-[25rem]">
                <h2 className="text-24 font-black text-title-color mb-4">
                  Bạn đang tìm kiếm lộ trình học cho người mới?
                </h2>
                <p className="text-14 text-text-color">
                  Các khóa học được thiết kế phù hợp cho người mới, lộ trình học
                  rõ ràng, nội dung dễ hiểu.
                </p>
                <NavLink
                  to="/roadmap"
                  className="w-full md:max-w-[10rem] text-center text-15 text-text-color font-semibold py-2 px-4 mt-4 border-2 border-solid border-title-color rounded-full hover:bg-title-color hover:text-white transition-all ease-linear duration-[125ms] select-none"
                >
                  Xem lộ trình
                </NavLink>
              </div>

              <div className="hidden md:block w-[26.25rem]">
                <img
                  className="w-full object-cover"
                  src={bannerFbGroup}
                  alt="banner_fb_group"
                />
              </div>
            </div>
          </section>
        </div>
      )}
    </DefaultLayout>
  );
};

export default Courses;
