import React, { useState } from "react";
import banner from "../images/banner.jpg";
import Menu from "./Menu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>  
      <div className="w-full">
        <div className="w-full hidden md:block">
          <img src={banner} alt="Banner" className="w-full h-32 object-cover" />
        </div>
        <div className="bg-white shadow-md">
          <div className="container mx-auto flex justify-between items-center md:py-8 px-6">
            <div className="hidden md:block"></div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="focus:outline-none text-black"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M19 12.75H5C4.80109 12.75 4.61032 12.671 4.46967 12.5303C4.32902 12.3897 4.25 12.1989 4.25 12C4.25 11.8011 4.32902 11.6103 4.46967 11.4697C4.61032 11.329 4.80109 11.25 5 11.25H19C19.1989 11.25 19.3897 11.329 19.5303 11.4697C19.671 11.6103 19.75 11.8011 19.75 12C19.75 12.1989 19.671 12.3897 19.5303 12.5303C19.3897 12.671 19.1989 12.75 19 12.75Z"
                      fill="#000000"
                    ></path>{" "}
                    <path
                      d="M19 8.25H5C4.80109 8.25 4.61032 8.17098 4.46967 8.03033C4.32902 7.88968 4.25 7.69891 4.25 7.5C4.25 7.30109 4.32902 7.11032 4.46967 6.96967C4.61032 6.82902 4.80109 6.75 5 6.75H19C19.1989 6.75 19.3897 6.82902 19.5303 6.96967C19.671 7.11032 19.75 7.30109 19.75 7.5C19.75 7.69891 19.671 7.88968 19.5303 8.03033C19.3897 8.17098 19.1989 8.25 19 8.25Z"
                      fill="#000000"
                    ></path>{" "}
                    <path
                      d="M19 17.25H5C4.80109 17.25 4.61032 17.171 4.46967 17.0303C4.32902 16.8897 4.25 16.6989 4.25 16.5C4.25 16.3011 4.32902 16.1103 4.46967 15.9697C4.61032 15.829 4.80109 15.75 5 15.75H19C19.1989 15.75 19.3897 15.829 19.5303 15.9697C19.671 16.1103 19.75 16.3011 19.75 16.5C19.75 16.6989 19.671 16.8897 19.5303 17.0303C19.3897 17.171 19.1989 17.25 19 17.25Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>
                </svg>
              </button>
            </div>

            <div className="hidden md:flex space-x-11 font-normal text-black text-lg content-center">
              <a href="#" className="hover:text-green-600 font-medium">
                Về chúng tôi
              </a>
              <a href="#" className="hover:text-green-600">
                Tin tức
              </a>
              <a href="#" className="hover:text-green-600">
                Voucher
              </a>
              <a href="#" className="hover:text-green-600">
                Sản phẩm nổi bật
              </a>
            </div>

            <div className="hidden md:flex space-x-4 text-base">
              <div>
                <a
                  href="#"
                  className="text-green-500 hover:underline font-medium"
                >
                  Đăng nhập
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="bg-green-500 text-white px-4 py-1.5 font-normal rounded hover:bg-green-600"
                >
                  Đăng ký
                </a>
              </div>
            </div>
          </div>

          {isMenuOpen && <Menu />}
        </div>
      </div>
    </>
  );
}

export default Header;
