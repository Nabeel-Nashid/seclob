import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import image from "../asset/profile.jpg";

function Header() {
  return (
    <div className="h-fit w-screen bg-[#FAFAFB]">
      <div className="flex justify-between p-6">
        <h4 className="font-semibold">Upload CSV</h4>
        <div className="flex items-center ">
          <IoNotificationsOutline className="w-6 h-6" />
          <img src={image} className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
}

export default Header;
