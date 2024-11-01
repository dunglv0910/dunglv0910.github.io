import React from "react";
import nesCafe from "../images/nesCafe.png";
import trungNguyencf from "../images/trungNguyencf.png";
import cafeSHop from "../images/cafeSHop.png";
import sweetCafe from "../images/sweetCafe.png";
import GCafe from "../images/GCafe.png";
import sanJoCafe from "../images/sanJoCafe.png";
import BackGroundNcc from "../images/back-ground-1.png";

function NhaPhanPhoi() {
  const NhaCCs = [
    { name: "Cafe logo", logo: nesCafe },
    { name: "Cafe logo", logo: trungNguyencf },
    { name: "Cafe logo", logo: cafeSHop },
  ];
  const NhaCCs2 = [
    { name: "Cafe logo", logo: sweetCafe },
    { name: "Cafe logo", logo: GCafe },
    { name: "Cafe logo", logo: sanJoCafe },
    { name: "Cafe logo", logo: nesCafe },
  ];

  return (
    <div className="px-4 py-8 bg-gradient-to-l from-green-200 to-green-50 h-full">
      <div className="container lg:flex m-auto gap-11 py-16">
        {/* ben trai */}
        <div className="w-full lg:w-2/6 ">
          <h2 className="text-5xl font-bold mb-4">
            10+ Nhà cung cấp cà phê hàng đầu Việt Nam
          </h2>
          <p className=" mb-6 text-xl">
            Chúng tôi liên kết với hơn 10 nhà cung cấp cà phê hàng đầu Việt Nam
            để mang đến cho bạn thức uống chất lượng nhất.
          </p>
          <div className="flex mb-6">
            <button className="bg-emerald-500 font-medium text-white px-4 py-2 ">
              Explore More
            </button>
          </div>
        </div>
        {/* Ben phai */}
        <div className="w-4/6 hidden lg:block">
          <div className="flex flex-wrap justify-center">
            <div className="block">
              <div className="flex gap-7 justify-center">
                {NhaCCs.map((NhaCC, index) => (
                  <div
                    key={index}
                    className=" flex justify-center p-4 flex flex-col items-center w-20 h-20 sm:w-32 sm:h-32"
                  >
                    <svg
                      className="absolute w-40 "
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#ffffff"
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
                          d="M14 4.21281L7.5 0.421143L1 4.21281V10.7872L7.5 14.5788L14 10.7872V4.21281Z"
                          fill="#ffffff"
                        ></path>{" "}
                      </g>
                    </svg>
                    <img
                      src={NhaCC.logo}
                      alt={NhaCC.name}
                      className="w-20 h-20 mb-2 flex justify-center relative object-cover rounded-md"
                    />
                  </div>
                ))}
              </div>
              <div className="flex gap-7 -m-1 justify-center">
                {NhaCCs2.map((NhaCC, index) => (
                  <div
                    key={index}
                    className=" flex justify-center p-4 flex flex-col items-center w-20 h-20 sm:w-32 sm:h-32"
                  >
                    <svg
                      className="absolute w-40"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#ffffff"
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
                          d="M14 4.21281L7.5 0.421143L1 4.21281V10.7872L7.5 14.5788L14 10.7872V4.21281Z"
                          fill="#ffffff"
                        ></path>{" "}
                      </g>
                    </svg>
                    <img
                      src={NhaCC.logo}
                      alt={NhaCC.name}
                      className="w-20 h-20 mb-2 flex justify-center mb-2 relative object-cover rounded-md"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="container md:flex gap-24 m-auto justify-center">
          {[
            "Trung Nguyên Legend",
            "Vinacafé",
            "Phúc Long",
            "Nestlé (Nescafé)",
            "Lamant Coffee",
          ].map((name, index) => (
            <p className="text-gray-500 font-medium text-lg">{name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NhaPhanPhoi;
