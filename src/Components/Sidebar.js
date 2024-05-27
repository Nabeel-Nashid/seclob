import React from "react";
import { TbCashBanknoteFilled } from "react-icons/tb";
import { BsFillGridFill } from "react-icons/bs";
import { IoStatsChart,IoCalendar,IoNotifications,IoSettingsSharp } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";


function Sidebar() {
  return (
    <div className="bg-white h-screen w-[218px]">
      <div className="flex justify-center pt-5 items-center">
        <div className="bg-[#605BFF] h-7 w-7 rounded-full mr-3"></div>
        <h1 className="text-[24px]">Base</h1>
      </div>
      <div className="relative mt-10 ml-12 text-[16px] text-[#9A9AA9]">
        <div className="flex items-center  my-8 hover:text-[#605BFF] cursor-pointer">
          <BsFillGridFill className="mr-2 " />
          <h4 className="">Dashboard</h4>
        </div>
        <div className="flex items-center  my-8 hover:text-[#605BFF] cursor-pointer">
          <IoStatsChart className="mr-2 " />
          <h4 className="">Upload</h4>
        </div>
        <div className="flex items-center  my-8 hover:text-[#605BFF] cursor-pointer">
          <TbCashBanknoteFilled className="mr-2 " />
          <h4 className="">Invoice</h4>
        </div>
        <div className="flex items-center  my-8 hover:text-[#605BFF] cursor-pointer">
          <CgNotes className="mr-2 " />
          <h4 className="">Schedule</h4>
        </div>
        <div className="flex items-center  my-8 hover:text-[#605BFF] cursor-pointer">
          <IoCalendar className="mr-2 " />
          <h4 className="">Calendar</h4>
        </div>
        <div className="flex items-center  my-8 hover:text-[#605BFF] cursor-pointer">
          <IoNotifications className="mr-2 " />
          <h4 className="">Notification</h4>
        </div>
        <div className="flex items-center  my-8 hover:text-[#605BFF] cursor-pointer">
          <IoSettingsSharp className="mr-2 " />
          <h4 className="">Settings</h4>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
