import React from "react";
import Voucher from "./child_components/voucher";
import Img_voucher from "../images/icon-bangGiacaphe.png";

function Section2() {
  let USD_VND = "24,635";
  let USD_Change = 0;

  var item_voucher = [
    {
      obj: "Chỉ người dùng mới 2",
      sale: 10,
      minOrder: 500000,
      end: "03/10/2024",
    },
    {
      obj: "Chỉ người dùng mới 3",
      sale: 30,
      minOrder: 2000000,
      end: "03/10/2024",
    },
  ];
  return (
    <>
      <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-8 h-fit">
        {/* Bảng giá cà phê */}
        <div className="p-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-16 text-center">
            Bảng giá cà phê hôm nay
          </h1>
          <div className="flex mb-2 gap-3 items-center">
            <button className="hover:bg-emerald-600 bg-emerald-500 text-white text-xl font-bold px-12 py-3">
              Xem ngày khác
            </button>
            <button className="border border-green-500 pl-4 pr-6 py-2 rounded-3xl text-green-500 flex items-center">
              {/* icon-share */}
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g clip-path="url(#clip0_15_72)">
                    {" "}
                    <rect width="24" height="24" fill="white"></rect>{" "}
                    <circle
                      cx="7"
                      cy="12"
                      r="2"
                      stroke="#29C89D"
                      stroke-linejoin="round"
                    ></circle>{" "}
                    <circle
                      cx="17"
                      cy="6"
                      r="2"
                      stroke="#29C89D"
                      stroke-linejoin="round"
                    ></circle>{" "}
                    <path d="M15 7L8.5 11" stroke="#29C89D"></path>{" "}
                    <circle
                      cx="17"
                      cy="18"
                      r="2"
                      stroke="#29C89D"
                      stroke-linejoin="round"
                    ></circle>{" "}
                    <path d="M8.5 13.5L15 17" stroke="#29C89D"></path>{" "}
                  </g>{" "}
                  <defs>
                    {" "}
                    <clipPath id="clip0_15_72">
                      {" "}
                      <rect width="24" height="24" fill="white"></rect>{" "}
                    </clipPath>{" "}
                  </defs>{" "}
                </g>
              </svg>
              Chia sẻ
            </button>
          </div>
          <table className="w-full text-left sm:max-md:m-auto">
            <thead>
              <tr className="text-gray-400 font-norma">
                <td className="py-2">Thị trường</td>
                <td className="py-2">Trung bình</td>
                <td className="py-2">Thay đổi</td>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Đắk Lắk", TbPrice: "113,400", change: "-200" },
                { name: "Lâm Đồng", TbPrice: "112,800", change: "-200" },
                { name: "Gia Lai", TbPrice: "113,400", change: "+100" },
                { name: "Đắk Nông", TbPrice: "113,500", change: "-100" },
                { name: "Hồ tiêu", TbPrice: "146,000", change: "+1,000" },
              ].map((row, index) => (
                <tr key={index} className="">
                  <td className="py-3">{row.name}</td>
                  <td className="py-3 font-bold">{row.TbPrice}</td>
                  <td
                    className={`py-3 text-end pr-8 w-24 ${
                      row.change.startsWith("-")
                        ? "text-red-500"
                        : row.change.startsWith("+")
                        ? "text-green-500"
                        : ""
                    }`}
                  >
                    {row.change}
                  </td>
                </tr>
              ))}
              {
                <tr>
                  <td className="py-3">Tỷ giá USD/VND</td>
                  <td className="font-bold py-3">{USD_VND}</td>
                  <td className="py-3 text-end pr-8 w-24">{USD_Change}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>

        {/* Ưu đãi đặc biệt */}
        <div className="md:mt-8 h-fit">
          <div className="w-fit m-auto">
            <img
              className="w-32 hidden lg:block absolute"
              src={Img_voucher}
              alt="voucher"
            />
          </div>
          <div className="relative top-24">
            <div className="bg-gradient-to-b from-green-100 to-white  p-4">
              <h2 className="text-xl font-bold mb-4 text-center text-3xl text-emerald-600">
                Ưu đãi đặc biệt dành cho bạn
              </h2>
              {item_voucher.map((row, index) => (
                <Voucher row={row} />
              ))}

              {/* <button className="bg-green-500 text-white px-4 py-2 rounded-lg w-full">
                Thu thập tất cả
              </button> */}
              <div className="w-full">
                <div className="md:w-2/6 m-auto">
                  <button className="hover:bg-emerald-600 bg-emerald-500 font-medium text-xl text-white py-3 rounded-3xl w-full m-auto mt-4">
                    Thu thập tất cả
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;
