import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import DefaultLayout from "../../layouts/DefaultLayout";
import bannerFe from "../../assets/images/banner_fe.png";
import bannerBe from "../../assets/images/banner_be.png";
import bannerFbGroup from "../../assets/images/fb-group-card.png";

const RoadMap: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DefaultLayout>
      <div className="flex-1 p-4 mb-20 md:px-8 lg:px-12 w-full overflow-hidden">
        <section>
          <div className="mb-20">
            <h1 className="text-28 font-black text-title-color mb-4">
              Lộ trình học
            </h1>
            <p className="text-15 text-text-color max-w-[52.5rem]">
              Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình
              học. Ví dụ: Để đi làm với vị trí "Lập trình viên Front-end" bạn
              nên tập trung vào lộ trình "Front-end".
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-start mb-20">
            <div className="flex items-start justify-start w-full lg:w-[31.25rem] border-2 border-solid border-border-color p-6 rounded-2xl mb-6 lg:mr-6 lg:mb-0">
              <div className="flex flex-col items-start flex-1">
                <h2 className="text-20 text-title-color font-black mb-4">
                  Lộ trình học Front-end
                </h2>
                <p className="text-14 text-text-color">
                  Lập trình viên Front-end là người xây dựng ra giao diện
                  websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở
                  thành lập trình viên Front-end nhé.
                </p>
                <Link
                  to="/roadmap/front-end-development"
                  className="w-full md:max-w-[7.5rem] text-center text-14 text-white font-semibold hover:opacity-90 bg-primary-color px-4 py-2 mt-4 rounded-full"
                >
                  Xem chi tiết
                </Link>
              </div>
              <div className="ml-4 hidden md:block">
                <img
                  className="w-[7.625rem] h-[7.625rem] rounded-full p-2 border-[5px] border-solid border-primary-color object-cover"
                  src={bannerFe}
                  alt="banner_fe"
                />
              </div>
            </div>

            <div className="flex items-start justify-start w-full lg:w-[31.25rem] border-2 border-solid border-border-color p-6 rounded-2xl">
              <div className="flex flex-col items-start flex-1">
                <h2 className="text-20 text-title-color font-black mb-4">
                  Lộ trình học Back-end
                </h2>
                <p className="text-14 text-text-color">
                  Lập trình viên Back-end là người làm việc với dữ liệu, công
                  việc thường nặng tính logic hơn. Chúng ta sẽ cùng tìm hiểu
                  thêm về lộ trình học Back-end nhé.
                </p>
                <Link
                  to="/roadmap/back-end-development"
                  className="w-full md:max-w-[7.5rem] text-center text-14 text-white font-semibold hover:opacity-90 bg-primary-color px-4 py-2 mt-4 rounded-full"
                >
                  Xem chi tiết
                </Link>
              </div>
              <div className="ml-4 hidden md:block">
                <img
                  className="w-[7.625rem] h-[7.625rem] rounded-full p-2 border-[5px] border-solid border-primary-color object-cover"
                  src={bannerBe}
                  alt="banner_be"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-4">
            <div className="flex flex-col items-start w-full md:w-[25rem]">
              <h2 className="text-24 font-black text-title-color mb-4">
                Tham gia cộng đồng học viên ITGangz trên Facebook
              </h2>
              <p className="text-14 text-text-color">
                Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy tham
                gia hỏi đáp, chia sẻ và hỗ trợ nhau trong quá trình học nhé.
              </p>
              <a
                href="https://www.facebook.com/nguyenhuydz3"
                target="_blank"
                className="w-full md:max-w-[10rem] text-center text-15 text-text-color font-semibold py-2 px-4 mt-4 border-2 border-solid border-title-color rounded-full hover:bg-title-color hover:text-white transition-all ease-linear duration-[125ms] select-none"
              >
                Tham gia nhóm
              </a>
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
    </DefaultLayout>
  );
};

export default RoadMap;
