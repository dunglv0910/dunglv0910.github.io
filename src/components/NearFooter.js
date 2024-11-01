import React from "react";

function NearFooter() {
  return (
    <>
      <div className="w-full h-fit bg-gray-100">
        <div className="container mx-auto pt-12 pb-8">
          <div className="block w-full">
            <h1 className="text-gray-700 text-xl md:text-6xl font-bold text-center  w-4/6 m-auto">
              Mang đến cho bạn trải nghiệm tốt nhất
            </h1>
          </div>
          <div className="w-full mt-10 flex justify-center">
            <button className="rounded-md border-none text-white md:text-lg text-base md:py-3 py-1 md:px-9 px-4 bg-green-500 flex justify-center">
              Xem video ➝
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NearFooter;
