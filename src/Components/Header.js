import React, { useState } from "react";
import { IoCalendar, IoNotifications, IoNotificationsOutline, IoSettingsSharp, IoStatsChart } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import image from "../asset/profile.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { TbCashBanknoteFilled } from "react-icons/tb";

function Header() {
  const [bar, setBar] = useState(false);
  const handleClick = () => {
    setBar(!bar);
  };
  return (
    <div className="h-fit min-w-full bg-[#FAFAFB]">
      <div className="flex justify-between p-6">
        <h4 className="hidden sm:block font-semibold">Upload CSV</h4>
        <div className="flex justify-center items-center sm:hidden ">
          {/* <RxHamburgerMenu /> */}

          <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
            {!bar ? <FaBars /> : <FaTimes />}
          </div>

          <ul
            className={
              !bar
                ? "hidden"
                : "absolute top-0 left-0 w-[300px] h-[600px] bg-[#f5f3f3] flex flex-col justify-center items-center text-[#9A9AA9]"
            }
          >
            <li
              className="py-6 text-4x flex items-center
        "
            >
              <BsFillGridFill className="mr-2 " />
              <h4 className="">Dashboard</h4>
            </li>
            <li
              className="py-6 text-4x flex items-center
        "
            >
              <IoStatsChart className="mr-2 " />
          <h4 className="">Upload</h4>
            </li>
            <li
              className="py-6 text-4x flex items-center
        "
            >
              <TbCashBanknoteFilled className="mr-2 " />
          <h4 className="">Invoice</h4>
            </li>
            <li
              className="py-6 text-4x flex items-center
        "
            >
              <CgNotes className="mr-2 " />
          <h4 className="">Schedule</h4>
            </li>

            <li
              className="py-6 text-4x flex items-center
        "
            >
              <IoCalendar className="mr-2 " />
          <h4 className="">Calendar</h4>
            </li>

            <li
              className="py-6 text-4x flex items-center
        "
            >
              <IoNotifications className="mr-2 " />
          <h4 className="">Notification</h4>
            </li>

            <li
              className="py-6 text-4x flex items-center
        "
            >
              <IoSettingsSharp className="mr-2 " />
          <h4 className="">Settings</h4>
            </li>
          </ul>

          <div className="bg-[#605BFF] h-5  w-5  rounded-full mx-3"></div>
          <h4 className="font-semibold">Base</h4>
        </div>
        <div className="flex items-center ">
          <IoNotificationsOutline className="w-6 h-6" />
          <img src={image} className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
}

export default Header;
