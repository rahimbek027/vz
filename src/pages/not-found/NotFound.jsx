import React from "react";
import { BsEmojiFrown } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto">
      <div className="flex mr-auto flex-col gap-6 items-center mb-4">
        <h2 className="text-[68px] font-[800]">404</h2>
        <p>Sahifa topilmadi</p>
        <BsEmojiFrown className="text-[38px] text-[#dbdb38]" />
        <div>
          <button
            onClick={() => navigate("/")}
            className="p-3 bg-gray-300 mx-2 rounded-lg cursor-pointer"
          >
            Goo Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="p-3 bg-gray-300 mx-2 rounded-lg cursor-pointer"
          >
            Goo Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
