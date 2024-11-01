import React from "react";

function child_tintuc({ item, index }) {
  return (
    <>
      <div
        key={index}
        className="sm:w-1/2 md:w-1/4 h-full group hover:-m-2 transition-all hover:mx-0"
      >
        <div className="bg-white rounded-lg overflow-hidden w-full h-full">
          <div className="relative z-10 ">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-52 object-cover rounded-md"
            />
          </div>
          <div className="p-4 h-36 w-4/5 shadow-lg rounded-lg m-auto -mt-20 mb-4 bg-white relative z-20 ">
            <p className="text-center font-medium h-20">{item.title}</p>
            <a
              href={item.link}
              className="block text-green-600 text-center font-medium mt-2"
            >
              Đọc thêm →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default child_tintuc;
