import logo from "../../assets/images/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="py-[4.25rem] bg-footer-color">
      <div className="max-w-[68.75rem] my-0 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 lg:grid-cols-5 px-4 md:px-8 lg:px-0">
          <div className="lg:my-0 lg:mx-auto pb-6">
            <div className="flex items-center justify-start">
              <img
                className="w-[2.375rem] h-[2.375rem] rounded-lg mr-[0.625rem]"
                src={logo}
                alt="logo_F8"
              />
              <h2 className="text-16 font-bold text-white">
                Học Lập Trình Cùng ITGangz
              </h2>
            </div>
            <div className="text-14 text-text-color-3 my-4">
              <p>
                Điện thoại:{" "}
                <a className="hover:opacity-80" href="tel:0382594757">
                  0382594757
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  className="hover:opacity-80"
                  href="mailto:nguyenhuydz3@gmail.com"
                >
                  nguyenhuydz3@gmail.com
                </a>
              </p>
              <p>Địa chỉ: 180 Cao Lỗ, Phường 04, Quận 8</p>
            </div>
          </div>

          <div className="lg:my-0 lg:mx-auto pb-6">
            <h2 className="text-18 font-semibold text-white uppercase my-3">
              Về ITGangz
            </h2>
            <ul className="text-14 text-text-color-3">
              <li className="hover:text-white py-1 cursor-pointer">
                Giới thiệu
              </li>
              <li className="hover:text-white py-1 cursor-pointer">
                Cơ hội việc làm
              </li>
            </ul>
          </div>

          <div className="lg:my-0 lg:mx-auto pb-6">
            <h2 className="text-18 font-semibold text-white uppercase my-3">
              Sản phẩm
            </h2>
            <ul className="text-14 text-text-color-3">
              <li className="hover:text-white py-1 cursor-pointer">
                Rút gọn liên kết
              </li>
              <li className="hover:text-white py-1 cursor-pointer">
                CSS Selector
              </li>
              <li className="hover:text-white py-1 cursor-pointer">
                CSS Diner
              </li>
              <li className="hover:text-white py-1 cursor-pointer">Froggy</li>
              <li className="hover:text-white py-1 cursor-pointer">
                Froggy Pro
              </li>
              <li className="hover:text-white py-1 cursor-pointer">Nester</li>
              <li className="hover:text-white py-1 cursor-pointer">Scoops</li>
            </ul>
          </div>

          <div className="lg:my-0 lg:mx-auto pb-6">
            <h2 className="text-18 font-semibold text-white uppercase my-3">
              Hỗ trợ
            </h2>
            <ul className="text-14 text-text-color-3">
              <li className="hover:text-white py-1 cursor-pointer">Liên hệ</li>
              <li className="hover:text-white py-1 cursor-pointer">Bảo mật</li>
              <li className="hover:text-white py-1 cursor-pointer">
                Điều khoản
              </li>
            </ul>
          </div>

          <div className="lg:my-0 lg:mx-auto pb-6">
            <h2 className="text-18 font-semibold text-white uppercase my-3">
              Công ty cổ phần công nghệ giáo dục ITGangz
            </h2>
            <ul className="text-14 text-text-color-3">
              <li className="py-1">Mã số thuế: 0123456789</li>
              <li className="py-1">Ngày thành lập: 31/05/2022</li>
              <li className="py-1">
                Lĩnh vực: Công nghệ, giáo dục, lập trình. ITGangz xây dựng và
                phát triển những sản phẩm mang lại giá trị cho cộng đồng.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
