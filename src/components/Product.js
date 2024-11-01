import React from "react";
import Img_prd from "../images/poduct-1.png";
const products = [
  {
    title: "Cà phê rang xay",
    brand: "Trung Nguyên",
    price: "250.000",
    oldPrice: "3.500.000",
    new: false,
    imgUrl: Img_prd,
  },
  {
    title: "Cà phê rang xay",
    brand: "Trung Nguyên",
    price: "250.000",
    oldPrice: "3.500.000",
    new: false,
    imgUrl: Img_prd,
  },
  {
    title: "Cà phê rang xay",
    brand: "Trung Nguyên",
    price: "250.000",
    oldPrice: "3.500.000",
    new: false,
    imgUrl: Img_prd,
  },
  {
    title: "Cà phê rang xay",
    brand: "Trung Nguyên",
    price: "250.000",
    oldPrice: "3.500.000",
    new: false,
    imgUrl: Img_prd,
  },
  {
    title: "Cà phê rang xay",
    brand: "Trung Nguyên",
    price: "250.000",
    oldPrice: "3.500.000",
    new: true,
    imgUrl: Img_prd,
  },
  {
    title: "Cà phê rang xay",
    brand: "Trung Nguyên",
    price: "250.000",
    oldPrice: "3.500.000",
    new: false,
    imgUrl: Img_prd,
  },
  {
    title: "Cà phê rang xay",
    brand: "Trung Nguyên",
    price: "250.000",
    oldPrice: "3.500.000",
    new: true,
    imgUrl: Img_prd,
  },
  {
    title: "Cà phê rang xay",
    brand: "Trung Nguyên",
    price: "250.000",
    oldPrice: "3.500.000",
    new: false,
    imgUrl: Img_prd,
  },
];

function Product() {
  return (
    <div className="max-w-6xl mx-auto p-5">
      <div className="flex justify-center items-center gap-5 mt-6 mb-11">
        <span className="bg-emerald-500 w-16 h-1 mt-1"></span>
        <h2 className="text-lg md:text-2xl font-bold ">Sản phẩm nổi bật</h2>
        <span className="bg-emerald-500 w-16 h-1 mt-1"></span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product, index) => (
          <div className="bg-white overflow-hidden group h-[373px] ">
            <div className="overflow-hidden relative z-10">
              <img
                src={product.imgUrl}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-gray-50">
                <h3 className="text-lg font-bold">{product.title}</h3>
                <p className="text-sm text-gray-600">{product.brand}</p>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xl font-semibold">
                    vnđ {product.price}
                  </span>
                  <span className="text-sm line-through text-gray-500">
                    vnđ {product.price}
                  </span>
                </div>
              </div>
            </div>
            <div className="relative bg-gray-600 h-[374px] flex items-center justify-center bg-opacity-80 group-hover:-mt-[23.5rem] transition-all z-30 border">
              <div className="block h-fit">
                <div className="flex justify-center">
                  <button className="bg-white m-auto text-[17px] border-none px-9 py-2 font-medium text-yellow-700">
                    Thêm vào giỏ
                  </button>
                </div>
                <div className="flex justify-center text-white gap-6 font-medium mt-4 items-center">
                  <a href="#" className="flex items-center gap-1">
                    <svg
                      className="w-3 h-3"
                      fill="#ffffff"
                      width="64px"
                      height="64px"
                      viewBox="0 0 32 32"
                      version="1.1"
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
                        <path d="M27 22c-1.646 0-3.103 0.8-4.013 2.028l-13.168-6.71c0.114-0.421 0.181-0.86 0.181-1.317 0-0.572-0.101-1.119-0.277-1.63l13.242-6.426c0.909 1.244 2.375 2.056 4.035 2.056 2.762 0 5-2.239 5-5s-2.238-5-5-5-5 2.239-5 5c0 0.388 0.049 0.764 0.133 1.127l-13.432 6.518c-0.915-1.009-2.231-1.646-3.7-1.646-2.761 0-5 2.239-5 5s2.239 5 5 5c1.59 0 3.004-0.744 3.92-1.902l13.222 6.739c-0.090 0.374-0.142 0.762-0.142 1.163 0 2.761 2.238 5 5 5s5-2.239 5-5-2.238-5-5-5zM27 2c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM5 19c-1.657 0-3-1.343-3-3s1.343-3 3-3c1.657 0 3 1.344 3 3s-1.343 3-3 3zM27 30c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>{" "}
                      </g>
                    </svg>
                    Chia sẻ
                  </a>
                  <a href="#" className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 mt-[2px]"
                      width="64px"
                      height="64px"
                      viewBox="0 0 24 24"
                      fill="none"
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
                          d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
                          stroke="#ffffff"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    Yêu thích
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center m-11">
        <button className="bg-white text-lg font-medium text-emerald-500 border border-emerald-500 py-2 px-14">
          Xem thêm
        </button>
      </div>
    </div>
  );
}

export default Product;
