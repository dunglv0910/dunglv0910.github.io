import React from "react";
import logo from "../images/logo.png";
import logo_app from "../images/logo-app.png";
import slide from "../images/background-slide.png";
import infor_app from "../images/infor-app-in-store.png";
import qr_app from "../images/QR-app.png";
import gg_play from "../images/gg-play.png";
import appstore from "../images/appstore.png";
import order_icon from "../images/order-icon.png";
import voucher_icon from "../images/voucher-icon.png";
import suport_icon from "../images/suport-icon.png";
import Section2 from "./Section2";

function Section1() {
  return (
    <>
      <section className="bg-green-50 pb-5">
        <div className="m-auto">
          <div className="">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
              {/* <!-- logo --> */}
              <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-14" />
              </div>
              {/* <!-- search --> */}
              <div className="flex items-center bg-white rounded-3xl border-green-400 border border-solid py-1 pr-0 pl-0 w-4/6">
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm tại đây"
                  className="ml-4 px-4 py-2 rounded w-11/12 border-none outline-none"
                />
                <svg
                  className="w-6"
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
                    <path
                      d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                      stroke="#000000"
                      stroke-width="0.528"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </div>
              {/* <!-- cart --> */}
              <div className="flex items-center space-x-4 ">
                <div className="flex w-9 mb-4">
                  <svg
                    className="w-8 absolute"
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
                      <path
                        opacity="0.5"
                        d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                        stroke="#1C274C"
                        stroke-width="1.5"
                      ></path>
                      <path
                        opacity="0.5"
                        d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                        stroke="#1C274C"
                        stroke-width="1.5"
                      ></path>
                      <path
                        d="M2.26121 3.09184L2.50997 2.38429H2.50997L2.26121 3.09184ZM2.24876 2.29246C1.85799 2.15507 1.42984 2.36048 1.29246 2.75124C1.15507 3.14201 1.36048 3.57016 1.75124 3.70754L2.24876 2.29246ZM4.58584 4.32298L5.20507 3.89983V3.89983L4.58584 4.32298ZM5.88772 14.5862L5.34345 15.1022H5.34345L5.88772 14.5862ZM20.6578 9.88275L21.3923 10.0342L21.3933 10.0296L20.6578 9.88275ZM20.158 12.3075L20.8926 12.4589L20.158 12.3075ZM20.7345 6.69708L20.1401 7.15439L20.7345 6.69708ZM19.1336 15.0504L18.6598 14.469L19.1336 15.0504ZM5.70808 9.76V7.03836H4.20808V9.76H5.70808ZM2.50997 2.38429L2.24876 2.29246L1.75124 3.70754L2.01245 3.79938L2.50997 2.38429ZM10.9375 16.25H16.2404V14.75H10.9375V16.25ZM5.70808 7.03836C5.70808 6.3312 5.7091 5.7411 5.65719 5.26157C5.60346 4.76519 5.48705 4.31247 5.20507 3.89983L3.96661 4.74613C4.05687 4.87822 4.12657 5.05964 4.1659 5.42299C4.20706 5.8032 4.20808 6.29841 4.20808 7.03836H5.70808ZM2.01245 3.79938C2.68006 4.0341 3.11881 4.18965 3.44166 4.34806C3.74488 4.49684 3.87855 4.61727 3.96661 4.74613L5.20507 3.89983C4.92089 3.48397 4.54304 3.21763 4.10241 3.00143C3.68139 2.79485 3.14395 2.60719 2.50997 2.38429L2.01245 3.79938ZM4.20808 9.76C4.20808 11.2125 4.22171 12.2599 4.35876 13.0601C4.50508 13.9144 4.79722 14.5261 5.34345 15.1022L6.43198 14.0702C6.11182 13.7325 5.93913 13.4018 5.83723 12.8069C5.72607 12.1578 5.70808 11.249 5.70808 9.76H4.20808ZM10.9375 14.75C9.52069 14.75 8.53763 14.7482 7.79696 14.6432C7.08215 14.5418 6.70452 14.3576 6.43198 14.0702L5.34345 15.1022C5.93731 15.7286 6.69012 16.0013 7.58636 16.1283C8.45674 16.2518 9.56535 16.25 10.9375 16.25V14.75ZM4.95808 6.87H17.0888V5.37H4.95808V6.87ZM19.9232 9.73135L19.4235 12.1561L20.8926 12.4589L21.3923 10.0342L19.9232 9.73135ZM17.0888 6.87C17.9452 6.87 18.6989 6.871 19.2937 6.93749C19.5893 6.97053 19.8105 7.01643 19.9659 7.07105C20.1273 7.12776 20.153 7.17127 20.1401 7.15439L21.329 6.23978C21.094 5.93436 20.7636 5.76145 20.4632 5.65587C20.1567 5.54818 19.8101 5.48587 19.4604 5.44678C18.7646 5.369 17.9174 5.37 17.0888 5.37V6.87ZM21.3933 10.0296C21.5625 9.18167 21.7062 8.47024 21.7414 7.90038C21.7775 7.31418 21.7108 6.73617 21.329 6.23978L20.1401 7.15439C20.2021 7.23508 20.2706 7.38037 20.2442 7.80797C20.2168 8.25191 20.1002 8.84478 19.9223 9.73595L21.3933 10.0296ZM16.2404 16.25C17.0021 16.25 17.6413 16.2513 18.1566 16.1882C18.6923 16.1227 19.1809 15.9794 19.6074 15.6318L18.6598 14.469C18.5346 14.571 18.3571 14.6525 17.9744 14.6994C17.5712 14.7487 17.0397 14.75 16.2404 14.75V16.25ZM19.4235 12.1561C19.2621 12.9389 19.1535 13.4593 19.0238 13.8442C18.9007 14.2095 18.785 14.367 18.6598 14.469L19.6074 15.6318C20.0339 15.2842 20.2729 14.8346 20.4453 14.3232C20.6111 13.8312 20.7388 13.2049 20.8926 12.4589L19.4235 12.1561Z"
                        fill="#1C274C"
                      ></path>
                    </g>
                  </svg>
                  <span className=" relative top-0 left-5 inline-block w-4 h-4 bg-red-500 text-white text-xs rounded-3xl text-center">
                    12
                  </span>
                </div>
              </div>
              {/* <!-- notification --> */}
              <div className="flex items-center space-x-4">
                <div className="h-8 w-8">
                  <svg
                    className="w-8 absolute"
                    fill="#000000"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                   
                    viewBox="0 0 24 24"
                    // xml:space="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g id="surface1">
                        <path d="M12,2c-0.8,0-1.5,0.7-1.5,1.5v0.7C7.3,4.9,5,7.6,5,11v4.5l-2,2.3V19h18v-1.2l-2-2.3V11c0-3.4-2.3-6.1-5.5-6.8V3.5 C13.5,2.7,12.8,2,12,2z M10,20c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2H10z"></path>
                      </g>
                    </g>
                  </svg>
                  <span className="relative top-0 left-5 top- right-0 inline-block w-2 h-2 bg-red-500 text-white text-xs rounded-full text-center"></span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- slide --> */}
          <div className="container mx-auto mt-4 px-6 md:flex gap-4 ">
            {/* <!-- Silde --> */}
            <div className="flex-1 grid-cols-7">
              <div className="h-full p-3 rounded w-full bg-white rounded-2xl">
                <img
                  className="w-full  object-cover rounded-2xl"
                  src={slide}
                  alt="slide"
                />
              </div>
            </div>
            {/* <!-- near slide --> */}
            <div className="grid-cols-5 lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              <div className="h-full p-3 rounded w-full bg-white rounded-2xl">
                <div className="flex m-auto">
                  <img
                    className="w-24 h-24 rounded-2xl"
                    src={logo_app}
                    alt="Logo mb"
                  />
                  <div className="flex items-center">
                    <span className="py-2 px-4 items-center space-x-4 font-bold text-xl text-gray-600">
                      Tải app CaPheSi
                    </span>
                  </div>
                </div>
                <div className="my-3 m-auto">
                  <img
                    className="w-72 rounded-2xl"
                    src={infor_app}
                    alt="Logo mb"
                  />
                </div>
                <div className="flex ">
                  <div className="m-auto ">
                    <img className="w-28" src={qr_app} alt="Logo mb" />
                  </div>
                  <div className="m-auto md:m-0">
                    <div className="p-2 rounded-2xl border w-40 m-2">
                      <a>
                        <img className="md:w-40 md:h-8" src={appstore} alt="" />
                      </a>
                    </div>
                    <div className="p-2 rounded-2xl border w-40 m-2">
                      <a>
                        <img className="md:w-40  md:h-8" src={gg_play} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="text-gray-600">
                    Quét mã để tải app ngay bây giờ!
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/*end slide*/}
          <div className="">
            <div className="container mx-auto mt-4 px-6 w-full">
              {/*Đặt hàng*/}
              <div className="md:flex gap-5 grid h-56">
                <div className="md:w-2/6 bg-white grid-cols-4 p-6 mt-4 rounded-lg flex">
                  <div>
                    <h2 className=" text-2xl font-bold">Đặt hàng</h2>
                    <p className="mt-2 text-gray-600">
                      Đặt hàng nhanh chóng chỉ trong vài phút
                    </p>
                  </div>
                  <img className="w-32 h-32" src={order_icon} alt="" />
                </div>
                <div className="md:w-2/6 bg-white p-6 mt-4 grid-cols-4 rounded-lg flex">
                  {/*Voucher*/}
                  <div>
                    <h2 className="text-2xl font-bold">Vouchers</h2>
                    <p className="mt-2 text-gray-600">
                      Nhiều voucher giảm giá cực hot
                    </p>
                    <button className="border px-7 py-2 rounded-3xl m-6 font-medium text-green-400 border-green-400">
                      Xem ngay
                    </button>
                  </div>
                  <img className="w-32 h-32" src={voucher_icon} alt="" />
                </div>
                <div className="md:w-2/6 bg-white p-6 mt-4 grid-cols-4 rounded-lg flex">
                  {/*Hỗ trợ*/}
                  <div>
                    <h2 className="text-2xl font-bold">Hỗ trợ, tư vấn</h2>
                    <p className="mt-2 text-gray-600">
                      Đội ngũ tư vấn hỗ trợ 24/24
                    </p>
                  </div>
                  <img className="w-32 h-32" src={suport_icon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section1;
