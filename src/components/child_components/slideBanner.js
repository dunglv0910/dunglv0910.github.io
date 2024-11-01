import React, { useState } from "react";
import Slide_1 from "../../images/background-slide.png";
import Slide_2 from "../../images/slide-1.png";
import Slide_3 from "../../images/slide-2.png";

function Slide() {
  const list_image_slide = [Slide_1, Slide_2, Slide_3];
  
  const [index, setIndex] = useState(0);
  const slide_anm = () =>{
    setIndex(index)
  }

  return (
    <>
      {/* <!-- Silde --> */}
      <div className="flex-1 grid-cols-7">
        <div className="h-full p-3 rounded w-full bg-white rounded-2xl">
          <img
            className="w-full  object-cover rounded-2xl"
            src={Slide_1}
            alt="slide"
          />
        </div>
      </div>
    </>
  );
}
export default Slide;
