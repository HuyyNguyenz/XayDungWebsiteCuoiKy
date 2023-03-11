import { useState, useEffect } from "react";

import CoursePreview from "../../components/CoursePreview";
import DefaultLayout from "../../layouts/DefaultLayout";
import PayCourse from "../../components/PayCourse";
import { Course } from "../../interface";
import axios from "axios";
import { root } from "../../utils";
import { Helmet } from "react-helmet";

const RoadMapFrontEnd: React.FC = () => {
  const [courses, setCourses] = useState<Array<Course>>([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getCourses = async () => {
      await axios.get(`${root}/api/courses`).then((res) => {
        setCourses(res.data.data);
      });
    };
    getCourses();
  }, []);

  return (
    <DefaultLayout>
      <Helmet>
        <title>Lộ trình Front-end tại ITGangz</title>
      </Helmet>
      <div className="flex-1 p-4 mb-20 md:px-8 lg:px-12 w-full overflow-hidden">
        <section>
          <div className="max-w-[52.5rem]">
            <div className="flex flex-col items-start justify-start mb-20">
              <h1 className="text-28 text-title-color font-black">
                Lộ trình học Front-end
              </h1>
              <div className="text-15 text-text-color">
                <p className="my-4">
                  Hầu hết các websites hoặc ứng dụng di động đều có 2 phần là
                  Front-end và Back-end. Front-end là phần giao diện người dùng
                  nhìn thấy và có thể tương tác, đó chính là các ứng dụng mobile
                  hay những website bạn đã từng sử dụng. Vì vậy, nhiệm vụ của
                  lập trình viên Front-end là xây dựng các giao diện đẹp, dễ sử
                  dụng và tối ưu trải nghiệm người dùng.
                </p>
                <p className="my-4">
                  Tại Việt Nam,{" "}
                  <a
                    href="https://jobsgo.vn/muc-luong-lap-trinh-frontend/ho-chi-minh.html"
                    target="_blank"
                  >
                    <strong className="underline text-primary-color">
                      lương trung bình
                    </strong>
                  </a>{" "}
                  cho lập trình viên front-end vào khoảng{" "}
                  <strong className="text-title-color">16.000.000đ</strong> /
                  tháng
                </p>
                <p className="my-4">
                  Dưới đây là các khóa học ITGangz đã tạo ra dành cho bất cứ ai
                  theo đuổi sự nghiệp trở thành một lập trình viên Front-end.
                </p>
                <blockquote className="border-l-[3px] border-solid border-primary-color p-1">
                  <p className="ml-4 text-quote-color">
                    Các khóa học có thể chưa đầy đủ, ITGangz vẫn đang nỗ lực
                    hoàn thiện trong thời gian sớm nhất.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start mb-6">
              <h1 className="text-28 text-title-color font-black mb-2">
                Các khoá học Front End
              </h1>
              {courses.map((course) => {
                if (course.category_id === "Cat01") {
                  return <CoursePreview key={course.id} course={course} />;
                }
              })}
            </div>

            <div className="flex flex-col items-start justify-start">
              <div className="flex items-center justify-start">
                <h1 className="text-28 text-title-color font-black">
                  Các khoá học Pro tại ITGangz
                </h1>
                <img
                  className="w-[1.375rem] ml-2"
                  src="https://fullstack.edu.vn/static/media/crown_icon.3e4800f7485935ab6ea312a7080a85fe.svg"
                  alt="crown_img"
                />
              </div>
              <p className="text-14 text-text-color my-4">
                Các khóa học Pro được thiết kế đầy đủ chi tiết, bài bản. Với đa
                dạng các loại bài học và bài tập thực hành đi kèm, code luôn ở
                trang web. Cuối khóa học sẽ được thực hành từ 8 - 10 dự án thực
                chiến với cấp độ từ dễ đến khó.
              </p>
              <div className="flex items-center w-full overflow-y-hidden overflow-x-scroll md:flex-none md:grid md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
                {courses.map((course) => {
                  if (Number(course.price) > 0) {
                    return <PayCourse course={course} key={course.id} />;
                  }
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default RoadMapFrontEnd;
