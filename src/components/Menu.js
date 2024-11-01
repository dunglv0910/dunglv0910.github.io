import React from "react";

function Menu() {
  return (
    <>
      <div className="md:hidden bg-white shadow-md py-2 ">
        <div className="flex flex-col space-y-4 text-left pl-4 pb-5">
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
          <div>
            <a href="#" className="text-green-500 hover:underline font-medium">
              Đăng nhập
            </a>
          </div>
          <div>
            <a href="#" className="text-green-500 hover:underline font-medium">
              Đăng ký
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
