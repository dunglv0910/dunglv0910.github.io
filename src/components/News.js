import React from "react";
import Img_1 from "../images/tintuc-1.png";
import Img_2 from "../images/tintuc-2.png";
import Img_3 from "../images/tintuc-3.png";
import Child_tinTuc from "./child_components/child_tintuc";

function News() {
  const news = [
    {
      title: "Giá cà phê hôm nay ngày 09/10/2024",
      link: "#",
      image: Img_1,
    },
    {
      title: "Uống cà phê lượng vừa tốt cho 'bản lĩnh đàn ông'",
      link: "#",
      image: Img_2,
    },
    {
      title: "Bỏ 50.000 đồng uống ly cà phê ngoại vì ngồi được cả buổi",
      link: "#",
      image: Img_3,
    },
  ];

  return (
    <>
      <div className="container m-auto px-4 py-8 bg-white mt-14 lg:mt-0">
        <h2 className="container text-center text-2xl font-bold my-7 text-gray-600 ">
          Tin tức
        </h2>
        <div className="container flex flex-wrap w-full justify-center gap-6">
          {news.map((item, index) => (
            <Child_tinTuc item={item} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}
export default News;
