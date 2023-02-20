import { BaseSyntheticEvent, useEffect, useState } from "react";
import { Link, NavigateFunction, NavLink, useNavigate } from "react-router-dom";

import { faSquareFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/images/logo_F8.png";

const Login: React.FC = () => {
  const [isOpenLoginForm, setOpenLoginForm] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate: NavigateFunction = useNavigate();

  const handleOpenLoginForm = () => {
    setOpenLoginForm(true);
  };

  const handleCloseLoginForm = () => {
    setOpenLoginForm(false);
  };

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      alert("Success");
      navigate("/");
    } else {
      alert("Failed");
    }
  };

  return (
    <div className="relative bg-login-background w-screen h-screen bg-cover font-montserrat overflow-hidden">
      <div className="bg-white rounded-lg min-h-[31.5rem] max-w-[calc(100vw-32px)] md:max-w-[37.5rem] w-full px-4 py-12 center_item z-30">
        <div className="flex flex-col justify-start items-center">
          <NavLink to="/">
            <img src={logo} alt="logo_F8" className="w-11 h-11 rounded-lg" />
          </NavLink>
          <h1 className="text-28 font-bold text-title-color my-5">
            Đăng nhập vào F8
          </h1>

          {isOpenLoginForm ? (
            <div className="w-[17.5rem] md:w-[23.75rem] mt-6 text-14 text-text-color">
              <form className="text-center">
                <div className="flex flex-col justify-start items-start">
                  <label
                    className="text-title-color font-semibold mb-2"
                    htmlFor="username"
                  >
                    Tên đăng nhập
                  </label>
                  <input
                    onChange={(e: BaseSyntheticEvent) =>
                      setUsername(e.target.value)
                    }
                    className="py-3 px-5 rounded-full border-1 border-solid border-border-color bg-border-color outline-none w-full placeholder:text-text-color-2"
                    maxLength={18}
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    placeholder="Tên đăng nhập"
                  />
                </div>
                <div className="mt-4 flex flex-col justify-start items-start">
                  <label
                    className="text-title-color font-semibold mb-2"
                    htmlFor="password"
                  >
                    Mật khẩu
                  </label>
                  <input
                    onChange={(e: BaseSyntheticEvent) =>
                      setPassword(e.target.value)
                    }
                    className="py-3 px-5 rounded-full border-1 border-solid border-border-color bg-border-color outline-none w-full placeholder:text-text-color-2"
                    maxLength={32}
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    placeholder="Mật khẩu"
                  />
                </div>
                <input
                  onClick={handleLogin}
                  className="mt-6 w-full py-2 bg-gradient-to-br from-purple-color to-pink-color text-white text-16 font-semibold rounded-full cursor-pointer"
                  type="button"
                  name="buttonSubmit"
                  id="buttonSubmit"
                  value="Đăng nhập"
                />
              </form>
            </div>
          ) : (
            <div className="mt-6 text-14 text-text-color">
              <div
                onClick={handleOpenLoginForm}
                className="flex items-center justify-start px-5 py-2 border-2 border-solid border-border-color rounded-full mb-4 hover:bg-border-color cursor-pointer"
              >
                <img
                  src="https://accounts.fullstack.edu.vn/assets/images/signin/personal-18px.svg"
                  alt="user_img"
                />
                <span className="ml-6 font-semibold">
                  Sử dụng tài khoản cá nhân
                </span>
              </div>

              <div className="flex items-center justify-start px-5 py-2 border-2 border-solid border-border-color rounded-full mb-4 hover:bg-border-color cursor-pointer">
                <img
                  src="https://accounts.fullstack.edu.vn/assets/images/signin/google-18px.svg"
                  alt="google_img"
                />
                <span className="ml-6 font-semibold">Tiếp tục với Google</span>
              </div>

              <div className="flex items-center justify-start px-5 py-2 border-2 border-solid border-border-color rounded-full mb-4 hover:bg-border-color cursor-pointer">
                <FontAwesomeIcon
                  className="w-5 h-5 text-facebook-color"
                  icon={faSquareFacebook}
                />
                <span className="ml-6 font-semibold">
                  Tiếp tục với Facebook
                </span>
              </div>

              <div className="flex items-center justify-start px-5 py-2 border-2 border-solid border-border-color rounded-full mb-4 hover:bg-border-color cursor-pointer">
                <FontAwesomeIcon className="w-5 h-5" icon={faGithub} />
                <span className="ml-6 font-semibold">Tiếp tục với Github</span>
              </div>
            </div>
          )}

          <div className="flex items-center justify-start text-14 text-text-color mt-6">
            <span className="mr-1">Bạn chưa có tài khoản?</span>
            <Link className="text-primary-color font-semibold" to="/register">
              Đăng ký
            </Link>
          </div>

          {isOpenLoginForm ? (
            <div className="mt-2">
              <span className="text-14 text-primary-color font-semibold">
                Quên mật khẩu?
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
        {isOpenLoginForm ? (
          <div
            onClick={handleCloseLoginForm}
            className="absolute top-0 left-0 text-24 p-8 cursor-pointer"
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="overlay opacity-50"></div>
    </div>
  );
};

export default Login;
