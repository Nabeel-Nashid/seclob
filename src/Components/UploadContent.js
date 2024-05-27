import React from "react";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { RxUpload } from "react-icons/rx";
import { Link } from "react-router-dom";

function UploadContent() {
  return (
    <div className="bg-[#FAFAFB] flex justify-center h-screen w-screen">
      <div className="flex justify-center items-center">
        <div className="w-[596px] h-[367px] bg-white flex justify-center items-center rounded-md">
          <div className="flex flex-col">
            <div className="w-[540px] h-[272px] border-2 border-dotted rounded-md flex flex-col justify-center">
              <div className="flex flex-col justify-center items-center">
                <PiMicrosoftExcelLogoFill className="w-10 h-10 text-green-700" />
                <h4 className="text-xs text-slate-400">
                  Drop your excel sheet here to{" "}
                  <span className="text-[#605BFF]">Browse</span>
                </h4>
              </div>
            </div>
            <Link to={"/uploading"}>
              <button
                class="align-middle flex justify-center my-3 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#605BFF] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none  w-full"
                type="button"
              >
                <RxUpload className="w-4 h-4 mr-2" />
                upload
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadContent;
