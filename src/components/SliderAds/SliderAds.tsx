import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import htmlCssPro from "../../assets/images/html_css_pro.png";
import youtubeBanner from "../../assets/images/Banner_03_youtube.png";
import facebookBanner from "../../assets/images/Banner_04_2.png";
import reactBanner from "../../assets/images/Banner_web_ReactJS.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const SliderAds: React.FC = () => {
  const sliderRef = useRef<any>(null);

  const handleClickPrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleClickNext = () => {
    sliderRef.current.slickNext();
  };

  const settings: object = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    autoplay: false,
    autoplaySpeed: 7000,
  };

  return (
    <section className="relative mb-10">
      <Slider ref={sliderRef} {...settings}>
        {/* Khoá học HTML CSS PRO */}
        <div className="h-[16.875rem] overflow-hidden bg-gradient-to-r from-purple-color to-pink-color rounded-2xl">
          <div className="h-full flex items-center justify-between">
            <div className="flex flex-col items-start justify-start text-white max-w-[37.5rem] p-9">
              <div className="flex items-center justify-start mb-2">
                <h2 className="text-32 font-bold mr-2">
                  Khoá học HTML CSS Pro
                </h2>
                <img
                  className="w-6 h-6 object-cover"
                  src="https://fullstack.edu.vn/static/media/crown_icon.3e4800f7485935ab6ea312a7080a85fe.svg"
                  alt="crown"
                />
              </div>
              <p className="text-16 line-clamp-2 lg:line-clamp-none">
                Đây là khóa học đầy đủ và chi tiết nhất bạn có thể tìm thấy được
                ở trên Internet!
              </p>
              <button className="min-w-[7.75rem] text-14 font-bold rounded-2xl px-2 py-1 border-2 border-solid border-white hover:text-purple-color hover:bg-white transition-all ease-linear duration-150 mt-6">
                Tìm hiểu thêm
              </button>
            </div>
            <div className="h-full cursor-pointer hidden lg:block">
              <img
                className="h-full object-cover"
                src={htmlCssPro}
                alt="HTML CSS PRO"
              />
            </div>
          </div>
        </div>
        {/* Khoá học ReactJS */}
        <div className="h-[16.875rem] overflow-hidden bg-gradient-to-r from-blue-color to-blue-purple-color rounded-2xl">
          <div className="h-full flex items-center justify-between">
            <div className="flex flex-col items-start justify-start text-white max-w-[37.5rem] p-9">
              <div className="mb-2">
                <h2 className="text-32 font-bold mr-2">
                  Học ReactJS Miễn Phí!
                </h2>
              </div>
              <p className="text-16 line-clamp-2 lg:line-clamp-none">
                Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học
                này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.
              </p>
              <button className="min-w-[7.75rem] text-14 font-bold rounded-2xl px-2 py-1 border-2 border-solid border-white hover:text-blue-color hover:bg-white transition-all ease-linear duration-150 mt-6">
                Đăng ký ngay
              </button>
            </div>
            <div className="h-full cursor-pointer hidden lg:block">
              <img
                className="h-full object-cover"
                src={reactBanner}
                alt="ReactJs"
              />
            </div>
          </div>
        </div>
        {/* F8 Youtube */}
        <div className="h-[16.875rem] overflow-hidden bg-gradient-to-r from-red-color to-orange-color rounded-2xl">
          <div className="h-full flex items-center justify-between">
            <div className="flex flex-col items-start justify-start text-white max-w-[37.5rem] p-9">
              <div className="mb-2">
                <h2 className="text-32 font-bold mr-2">F8 trên Youtube</h2>
              </div>
              <p className="text-16">
                F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT
                và có những con người yêu thích lập trình F8 sẽ ở đó.
              </p>
              <a
                href="https://www.youtube.com/@F8VNOfficial"
                target="_blank"
                className="min-w-[7.75rem] text-14 font-bold rounded-2xl px-2 py-1 border-2 border-solid border-white hover:text-red-color hover:bg-white transition-all ease-linear duration-150 mt-6"
              >
                Truy cập kênh
              </a>
            </div>
            <a href="https://www.youtube.com/@F8VNOfficial" target="_blank">
              <div className="h-full cursor-pointer hidden lg:block">
                <img
                  className="h-full object-cover"
                  src={youtubeBanner}
                  alt="F8 Youtube"
                />
              </div>
            </a>
          </div>
        </div>
        {/* F8 Facebook */}
        <div className="h-[16.875rem] overflow-hidden bg-gradient-to-r from-blue-light-color to-blue-white-color rounded-2xl">
          <div className="h-full flex items-center justify-between">
            <div className="flex flex-col items-start justify-start text-white max-w-[37.5rem] p-9">
              <div className="mb-2">
                <h2 className="text-32 font-bold mr-2">F8 trên Facebook</h2>
              </div>
              <p className="text-16 line-clamp-2 lg:line-clamp-none">
                F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT
                và có những con người yêu thích lập trình F8 sẽ ở đó.
              </p>
              <a
                href="https://www.facebook.com/groups/f8official"
                target="_blank"
                className="min-w-[7.75rem] text-14 font-bold rounded-2xl px-2 py-1 border-2 border-solid border-white hover:text-blue-light-color hover:bg-white transition-all ease-linear duration-150 mt-6"
              >
                Truy cập Facebook
              </a>
            </div>
            <a
              href="https://www.facebook.com/groups/f8official"
              target="_blank"
            >
              <div className="h-full cursor-pointer hidden lg:block">
                <img
                  className="h-full object-cover"
                  src={facebookBanner}
                  alt="F8 Facebook"
                />
              </div>
            </a>
          </div>
        </div>
      </Slider>
      <button
        className="absolute top-1/2 left-0 translate-x-[-50%] translate-y-[-50%] bg-white py-1 px-3 rounded-[50%] shadow-[0_3px_6px_rgba(0,0,0,0.2)] hidden md:block"
        onClick={handleClickPrev}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <button
        className="absolute top-1/2 right-0 translate-x-[50%] translate-y-[-50%] bg-white py-1 px-3 rounded-[50%] shadow-[0_3px_6px_rgba(0,0,0,0.2)] hidden md:block"
        onClick={handleClickNext}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </section>
  );
};

export default SliderAds;
