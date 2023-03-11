import { BaseSyntheticEvent, useEffect, useState } from "react";
import { Link, NavigateFunction, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

import logo from "../../assets/images/logo.png";
import useFormValidation from "../../hooks/useFormValidation";
import { FormValidate, User } from "../../interface";
import { root } from "../../utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigate: NavigateFunction = useNavigate();

  const formData: FormValidate = {
    username,
    email,
    password,
    confirmPassword,
  };

  interface Notify {
    type: string;
    time: number;
  }

  const notify = (message: string, { type, time }: Notify) => {
    switch (type) {
      case "SUCCESS":
        toast.success(message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: time,
        });
        break;
      case "ERROR":
        toast.error(message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: time,
        });
        break;
    }
  };

  useEffect(() => {
    const inputs: NodeList = document.querySelectorAll(".input_item");

    // Khi click chuột ra ngoài input validate sẽ được gọi
    const handleValidateOn = (id: string) => {
      const errorMessage: HTMLSpanElement = document.querySelector(
        `#${id}+.message`
      ) as HTMLSpanElement;
      const validatedData: FormValidate = useFormValidation(formData);
      switch (id) {
        case "username":
          errorMessage.innerText = validatedData.username as string;
          break;
        case "email":
          errorMessage.innerText = validatedData.email as string;
          break;
        case "password":
          errorMessage.innerText = validatedData.password as string;
          break;
        case "confirm_password":
          errorMessage.innerText = validatedData.confirmPassword as string;
          break;
      }
    };

    // Khi focus input validate sẽ tạm thời ẩn
    const handleValidateOff = (id: string) => {
      const errorMessage: HTMLSpanElement = document.querySelector(
        `#${id}+.message`
      ) as HTMLSpanElement;
      switch (id) {
        case "username":
          errorMessage.innerText = "";
          break;
        case "email":
          errorMessage.innerText = "";
          break;
        case "password":
          errorMessage.innerText = "";
          break;
        case "confirm_password":
          errorMessage.innerText = "";
          break;
      }
    };

    Array.from(inputs).forEach((input: Node, index: number) => {
      const inputElement: HTMLInputElement = input as HTMLInputElement;
      inputElement.addEventListener("focusout", () =>
        handleValidateOn(inputElement.id)
      );
      return () => {
        inputElement.removeEventListener("focusout", () =>
          handleValidateOn(inputElement.id)
        );
      };
    });

    Array.from(inputs).forEach((input: Node, index: number) => {
      const inputElement: HTMLInputElement = input as HTMLInputElement;
      inputElement.addEventListener("focus", () =>
        handleValidateOff(inputElement.id)
      );
      return () => {
        inputElement.removeEventListener("focus", () =>
          handleValidateOff(inputElement.id)
        );
      };
    });

    handleActiveSubmit();
  }, [username, email, password, confirmPassword]);

  const handleActiveSubmit = () => {
    const btnSubmit: HTMLInputElement = document.querySelector(
      "#register"
    ) as HTMLInputElement;
    const validatedData: FormValidate = useFormValidation(formData);
    const errorValidated: boolean =
      validatedData.username !== "" ||
      validatedData.email !== "" ||
      validatedData.password !== "" ||
      validatedData.confirmPassword !== "";

    if (errorValidated) {
      btnSubmit.classList.remove("cursor-pointer");
      btnSubmit.classList.add("cursor-not-allowed");
      btnSubmit.classList.add("opacity-50");
    } else {
      btnSubmit.classList.remove("cursor-not-allowed");
      btnSubmit.classList.remove("opacity-50");
      btnSubmit.classList.add("cursor-pointer");
    }

    return errorValidated;
  };

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const errorValidated: boolean = handleActiveSubmit();
    // Nếu không có lỗi validate thì submit form
    if (!errorValidated) {
      const userData: User = {
        username,
        email,
        password,
        role_id: "2",
      };
      const checkRegister = async () => {
        await axios
          .post(`${root}/api/register`, userData)
          .then((res) => {
            if (res.data.status === true) {
              sessionStorage.setItem("user-data", res.data.data);
              notify("Đăng ký tài khoản thành công", {
                type: "SUCCESS",
                time: 1500,
              });
              setTimeout(() => {
                navigate("/login");
              }, 2500);
            }
          })
          .catch((error) => {
            notify("Tên đăng nhập hoặc email đã được đăng ký", {
              type: "ERROR",
              time: 1500,
            });
            console.log(error.response.data.message);
          });
      };
      checkRegister();
    }
  };

  return (
    <div className="relative bg-login-background w-screen h-screen bg-cover font-montserrat overflow-hidden">
      <Helmet>
        <title>Đăng ký tài khoản ITGangz</title>
      </Helmet>
      <div className="bg-white rounded-lg center_item z-30 overflow-hidden">
        <div className="flex flex-col justify-start items-center max-h-[37.5rem] w-full md:w-[37.5rem] md:px-4 px-8 py-12 overflow-y-scroll">
          <NavLink to="/">
            <img src={logo} alt="logo_F8" className="w-11 h-11 rounded-lg" />
          </NavLink>
          <h1 className="text-28 font-bold text-title-color my-5">
            Đăng ký tài khoản ITGangz
          </h1>

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
                  className="input_item py-3 px-5 rounded-full border border-solid border-border-color bg-border-color outline-none w-full placeholder:text-text-color-2"
                  maxLength={18}
                  type="text"
                  name="username"
                  id="username"
                  value={username.trim()}
                  placeholder="Tên đăng nhập"
                />
                <span className="message text-14 text-red-600"></span>
              </div>
              <div className="mt-4 flex flex-col justify-start items-start">
                <label
                  className="text-title-color font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  onChange={(e: BaseSyntheticEvent) => setEmail(e.target.value)}
                  className="input_item py-3 px-5 rounded-full border border-solid border-border-color bg-border-color outline-none w-full placeholder:text-text-color-2"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  placeholder="Địa chỉ email"
                />
                <span className="message text-14 text-red-600"></span>
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
                  className="input_item py-3 px-5 rounded-full border border-solid border-border-color bg-border-color outline-none w-full placeholder:text-text-color-2"
                  maxLength={32}
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  placeholder="Mật khẩu"
                />
                <span className="message text-14 text-red-600"></span>
              </div>
              <div className="mt-4 flex flex-col justify-start items-start">
                <label
                  className="text-title-color font-semibold mb-2"
                  htmlFor="confirm_password"
                >
                  Nhập lại mật khẩu
                </label>
                <input
                  onChange={(e: BaseSyntheticEvent) =>
                    setConfirmPassword(e.target.value)
                  }
                  className="input_item py-3 px-5 rounded-full border border-solid border-border-color bg-border-color outline-none w-full placeholder:text-text-color-2"
                  maxLength={32}
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  value={confirmPassword}
                  placeholder="Nhập lại mật khẩu"
                />
                <span className="message text-14 text-red-600"></span>
              </div>
              <input
                onClick={handleSubmit}
                className="mt-6 w-full py-2 bg-gradient-to-br from-purple-color to-pink-color text-white text-16 font-semibold rounded-full cursor-pointer select-none"
                type="submit"
                name="register"
                id="register"
                value="Đăng ký"
              />
            </form>
          </div>

          <div className="flex items-center justify-start text-14 text-text-color mt-6">
            <span className="mr-1">Bạn đã có tài khoản?</span>
            <Link className="text-primary-color font-semibold" to="/login">
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
      <div className="overlay opacity-50"></div>
      <ToastContainer />
    </div>
  );
};

export default Register;
