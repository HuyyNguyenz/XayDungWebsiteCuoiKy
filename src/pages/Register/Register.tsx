import { BaseSyntheticEvent, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/images/logo_F8.png";
import useFormValidation from "../../hooks/useFormValidation";
import { User } from "../../interface";

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const user: User = {
    username,
    email,
    password,
    firstName,
    lastName,
    role: "2",
  };

  useEffect(() => {
    const inputs: NodeList = document.querySelectorAll(".input_item");

    // Khi click chuột ra ngoài input validate sẽ được gọi
    const handleValidateOn = (id: string) => {
      const errorMessage: HTMLSpanElement = document.querySelector(
        `#${id}+.message`
      ) as HTMLSpanElement;
      const validatedResult: User = useFormValidation(user);
      switch (id) {
        case "username":
          errorMessage.innerText = validatedResult.username;
          break;
        case "email":
          errorMessage.innerText = validatedResult.email;
          break;
        case "password":
          errorMessage.innerText = validatedResult.password;
          break;
        case "firstName":
          errorMessage.innerText = validatedResult.firstName;
          break;
        case "lastName":
          errorMessage.innerText = validatedResult.lastName;
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
        case "firstName":
          errorMessage.innerText = "";
          break;
        case "lastName":
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
  }, [username, email, password, firstName, lastName]);

  const handleActiveSubmit = () => {
    const btnSubmit: HTMLInputElement = document.querySelector(
      "#buttonSubmit"
    ) as HTMLInputElement;
    const validatedResult: User = useFormValidation(user);
    const errorValidated: boolean =
      validatedResult.username !== "" ||
      validatedResult.email !== "" ||
      validatedResult.password !== "" ||
      validatedResult.firstName !== "" ||
      validatedResult.lastName !== "";

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

  const handleSubmit = () => {
    const errorValidated: boolean = handleActiveSubmit();
    // Nếu không có lỗi validate thì submit form
    if (!errorValidated) {
      console.log(user);
    }
  };

  return (
    <div className="relative bg-login-background w-screen h-screen bg-cover font-montserrat overflow-hidden">
      <div className="bg-white rounded-lg center_item z-30 overflow-hidden">
        <div className="flex flex-col justify-start items-center max-h-[37.5rem] w-full md:w-[37.5rem] md:px-4 px-8 py-12 overflow-y-scroll">
          <NavLink to="/">
            <img src={logo} alt="logo_F8" className="w-11 h-11 rounded-lg" />
          </NavLink>
          <h1 className="text-28 font-bold text-title-color my-5">
            Đăng ký tài khoản F8
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
                  htmlFor="firstName"
                >
                  Họ và tên lót
                </label>
                <input
                  onChange={(e: BaseSyntheticEvent) =>
                    setFirstName(e.target.value)
                  }
                  className="input_item py-3 px-5 rounded-full border border-solid border-border-color bg-border-color outline-none w-full placeholder:text-text-color-2"
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={firstName}
                  placeholder="Họ và tên lót của bạn"
                />
                <span className="message text-14 text-red-600"></span>
              </div>
              <div className="mt-4 flex flex-col justify-start items-start">
                <label
                  className="text-title-color font-semibold mb-2"
                  htmlFor="lastName"
                >
                  Tên của bạn
                </label>
                <input
                  onChange={(e: BaseSyntheticEvent) =>
                    setLastName(e.target.value)
                  }
                  className="input_item py-3 px-5 rounded-full border border-solid border-border-color bg-border-color outline-none w-full placeholder:text-text-color-2"
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={lastName}
                  placeholder="Tên của bạn"
                />
                <span className="message text-14 text-red-600"></span>
              </div>
              <input
                onClick={handleSubmit}
                className="mt-6 w-full py-2 bg-gradient-to-br from-purple-color to-pink-color text-white text-16 font-semibold rounded-full cursor-pointer select-none"
                type="button"
                name="buttonSubmit"
                id="buttonSubmit"
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
    </div>
  );
};

export default Register;
