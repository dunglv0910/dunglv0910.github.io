import React from "react";

function voucher({ row }) {
  return (
    <>
      <div className="">
        <span className="bg-red-500 text-white py-1 px-2  text-sm">
          {row.obj}
        </span>
        <div className="bg-green-200 p-4 rounded-lg mb-4">
          <h3 className="text-red-500 font-bold text-lg">GIẢM {row.sale}%</h3>
          <p className="text-emerald-700">Đơn hàng từ {row.minOrder}vnd</p>
          <p className="text-emerald-700">Hết hạn: {row.end}</p>
        </div>
      </div>
    </>
  );
}

export default voucher;
