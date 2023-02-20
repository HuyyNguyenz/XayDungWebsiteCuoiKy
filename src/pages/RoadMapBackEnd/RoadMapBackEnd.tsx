import { useState, useEffect } from "react";

import CoursePreview from "../../components/CoursePreview";
import DefaultLayout from "../../layouts/DefaultLayout";
import PayCourse from "../../components/PayCourse";
import htmlCssProImg from "../../assets/images/pay_course.png";
import { Course } from "../../interface";

const RoadMapBackEnd: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(true);

  const htmlCssPro: Course = {
    name: "HTML CSS Pro",
    price: 2499000,
    priceSale: 1299000,
    image: htmlCssProImg,
    subscribers: 0,
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
            <div className="max-w-[52.5rem]">
              <div className="flex flex-col items-start justify-start mb-20">
                <h1 className="text-28 text-title-color font-black">
                  Lộ trình học Back-end
                </h1>
                <div className="text-15 text-text-color">
                  <p className="my-4">
                    Hầu hết các websites hoặc ứng dụng di động đều có 2 phần là
                    Front-end và Back-end. Front-end là phần giao diện người
                    dùng nhìn thấy và có thể tương tác. Back-end là nơi xử lý dữ
                    liệu và lưu trữ. Vì vậy, nhiệm vụ của lập trình viên
                    Back-end là phân tích thiết kế dữ liệu, xử lý logic nghiệp
                    vụ của các chức năng trong ứng dụng.
                  </p>
                  <p className="my-4">
                    Tại Việt Nam,{" "}
                    <a
                      href="https://jobsgo.vn/muc-luong-lap-trinh-backend/ho-chi-minh.html"
                      target="_blank"
                    >
                      <strong className="underline text-primary-color">
                        lương trung bình
                      </strong>
                    </a>{" "}
                    cho lập trình viên back-end vào khoảng{" "}
                    <strong className="text-title-color">20.000.000đ</strong> /
                    tháng
                  </p>
                  <p className="my-4">
                    Dưới đây là các khóa học F8 đã tạo ra dành cho bất cứ ai
                    theo đuổi sự nghiệp trở thành một lập trình viên Back-end.
                  </p>
                  <blockquote className="border-l-[3px] border-solid border-primary-color p-1">
                    <p className="ml-4 text-quote-color">
                      Các khóa học có thể chưa đầy đủ, F8 vẫn đang nỗ lực hoàn
                      thiện trong thời gian sớm nhất.
                    </p>
                  </blockquote>
                </div>
              </div>

              <div className="flex flex-col items-start justify-start mb-10">
                <h2 className="text-24 text-title-color font-black">
                  1. Tìm hiểu về ngành IT
                </h2>
                <p className="text-14 text-text-color my-4">
                  Để theo ngành IT - Phần mềm cần rèn luyện những kỹ năng nào?
                  Bạn đã có sẵn tố chất phù hợp với ngành chưa? Cùng thăm quan
                  các công ty IT và tìm hiểu về văn hóa, tác phong làm việc của
                  ngành này nhé các bạn.
                </p>
                <CoursePreview />
              </div>

              <div className="flex flex-col items-start justify-start mb-10">
                <h2 className="text-24 text-title-color font-black">
                  2. HTML và CSS
                </h2>
                <p className="text-14 text-text-color my-4">
                  Để học web Front-end chúng ta luôn bắt đầu với ngôn ngữ HTML
                  và CSS, đây là 2 ngôn ngữ có mặt trong mọi website trên
                  internet. Dù bạn có theo Back-end thì công việc của bạn nhiều
                  khi vẫn cần phải ghép dữ liệu với HTML, CSS.
                </p>
                <CoursePreview />
              </div>

              <div className="flex flex-col items-start justify-start mb-10">
                <h2 className="text-24 text-title-color font-black">
                  3. JavaScript
                </h2>
                <p className="text-14 text-text-color my-4">
                  Có rất nhiều ngôn ngữ để bạn có thể làm việc với Back-end, tuy
                  nhiên bạn không cần phải học tất cả. Bạn chỉ cần tập trung vào
                  1 ngôn ngữ là có thể làm việc tốt. Tại đây chúng ta sẽ bắt đầu
                  với ngôn ngữ lập trình Javascript.
                </p>
                <CoursePreview />
              </div>

              <div className="flex flex-col items-start justify-start mb-10">
                <h2 className="text-24 text-title-color font-black">
                  4. Sử dụng Ubuntu/Linux
                </h2>
                <p className="text-14 text-text-color my-4">
                  Cách làm việc với hệ điều hành Ubuntu/Linux qua Windows
                  Terminal & WSL. Khi đi làm, nhiều trường hợp bạn cần nắm vững
                  các dòng lệnh cơ bản của Ubuntu/Linux.
                </p>
                <CoursePreview />
              </div>

              <div className="flex flex-col items-start justify-start mb-10">
                <h2 className="text-24 text-title-color font-black">
                  5. Libraries and Frameworks
                </h2>
                <p className="text-14 text-text-color my-4">
                  Một ứng dụng Back-end hiện đại có thể rất phức tạp, việc sử
                  dụng code thuần (tự tay code từ đầu) không phải là một lựa
                  chọn tốt. Vì vậy các Libraries và Frameworks ra đời nhằm đơn
                  giản hóa, tiết kiệm thời gian và tiền bạc để nhanh chóng tạo
                  ra được sản phẩm cuối cùng.
                </p>
                <CoursePreview />
              </div>

              <div className="flex flex-col items-start justify-start">
                <div className="flex items-center justify-start">
                  <h1 className="text-28 text-title-color font-black">
                    Các khoá học Pro tại F8{" "}
                  </h1>
                  <img
                    className="w-[1.375rem] ml-2"
                    src="https://fullstack.edu.vn/static/media/crown_icon.3e4800f7485935ab6ea312a7080a85fe.svg"
                    alt="crown_img"
                  />
                </div>
                <p className="text-14 text-text-color my-4">
                  Các khóa học Pro được thiết kế đầy đủ chi tiết, bài bản. Với
                  đa dạng các loại bài học và bài tập thực hành đi kèm, code
                  luôn ở trang web. Cuối khóa học sẽ được thực hành từ 8 - 10 dự
                  án thực chiến với cấp độ từ dễ đến khó.
                </p>
                <div className="flex items-center w-full overflow-y-hidden overflow-x-scroll md:flex-none md:grid md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
                  <PayCourse course={htmlCssPro} />
                  <PayCourse course={htmlCssPro} />
                  <PayCourse course={htmlCssPro} />
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </DefaultLayout>
  );
};

export default RoadMapBackEnd;
