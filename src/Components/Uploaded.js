import React from "react";
import Layout from "./Layout";
import UploadContent from "./UploadContent";
import { IoMdClose } from "react-icons/io";
import { RxUpload } from "react-icons/rx";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";

function Uploaded() {
  return (
    <Layout>
      <div className="bg-[#FAFAFB] flex flex-col justify-center h-screen sm:w-screen">
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
              {/* <Link to={"/uploading"}> */}
              <button
                class="align-middle flex justify-center my-3 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#928eff] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none  w-full"
                type="button"
              >
                <RxUpload className="w-4 h-4 mr-2" />
                upload
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>

        <div class=" overflow-hidden">
          <table class="font-inter w-full table-auto border-separate border-spacing-y-1 overflow-scroll text-left md:overflow-auto">
            <thead class="w-full rounded-lg bg-[#222E3A]/[6%] text-base font-semibold text-white">
              <tr class="">
                <th class="whitespace-nowrap rounded-l-lg py-3 pl-3 text-sm font-normal text-[#212B36]">
                  Sl No.
                </th>
                <th class="whitespace-nowrap py-3 pl-1 text-sm font-normal text-[#212B36]">
                  Links
                </th>
                <th class="whitespace-nowrap py-3 text-sm font-normal text-[#212B36]">
                  Prefix
                </th>
                <th class="whitespace-nowrap py-3 text-sm font-normal text-[#212B36]">
                  Add tags
                </th>
                <th class="whitespace-nowrap rounded-r-lg px-2.5 py-3 text-sm font-normal text-[#212B36]">
                  Selected Tags
                </th>
              </tr>
            </thead>
            <tbody>


              <tr class="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                <td class="rounded-l-lg py-4 pl-3 text-sm font-normal text-[#637381]">
                  1
                </td>
                <td class="px-1 py-4 text-sm font-normal text-[#637381]">
                  www.google.com
                </td>
                <td class="px-1 py-4 text-sm font-normal text-[#637381]">
                  prefixsample
                </td>
                <td class="px-1 py-4 text-sm font-normal text-[#637381]">
                  <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    class="text-[#637381] bg-white border focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                  >
                    Select Tags
                    <svg
                      class="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  <div
                    id="dropdown"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      class="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Tag 1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Tag 2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Tag 3
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Tag 4
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td class="flex px-2.5 py-4 text-sm font-normal text-[#637381]">
                  <button className="bg-[#605BFF] mx-1 flex justify-center items-center font-semibold rounded-md text-white text-xs p-1 ">
                    <h6 className=" mr-1">TAG 1</h6>
                    <IoMdClose />
                  </button>
                  <button className="bg-[#605BFF] mx-1 flex justify-center items-center font-semibold rounded-md text-white text-xs p-1 ">
                    <h6 className=" mr-1">TAG 2</h6>
                    <IoMdClose />
                  </button>
                  
                </td>
              </tr>


              <tr class="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                <td class="rounded-l-lg py-4 pl-3 text-sm font-normal text-[#637381]">
                  2
                </td>
                <td class="px-1 py-4 text-sm font-normal text-[#637381]">
                  www.google.com
                </td>
                <td class="px-1 py-4 text-sm font-normal text-[#637381]">
                  prefixsample
                </td>
                <td class="px-1 py-4 text-sm font-normal text-[#637381]">
                  <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    class="text-[#637381] bg-white border focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                  >
                    Select Tags
                    <svg
                      class="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  <div
                    id="dropdown"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      class="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Tag 1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Tag 2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Tag 3
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Tag 4
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td class="flex px-2.5 py-4 text-sm font-normal text-[#637381]">
                  <button className="bg-[#605BFF] mx-1 flex justify-center items-center font-semibold rounded-md text-white text-xs p-1 ">
                    <h6 className=" mr-1">TAG 1</h6>
                    <IoMdClose />
                  </button>
                  <button className="bg-[#605BFF] mx-1 flex justify-center items-center font-semibold rounded-md text-white text-xs p-1 ">
                    <h6 className=" mr-1">TAG 2</h6>
                    <IoMdClose />
                  </button>
                  <button className="bg-[#605BFF] mx-1 flex justify-center items-center font-semibold rounded-md text-white text-xs p-1 ">
                    <h6 className=" mr-1">TAG 3</h6>
                    <IoMdClose />
                  </button>
                </td>
              </tr>


              <tr class="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                <td class="rounded-l-lg py-4 pl-3 text-sm font-normal text-[#637381]">
                  3
                </td>
                <td class="px-1 py-4 text-sm font-normal text-[#637381]">
                  www.google.com
                </td>
                <td class="px-1 py-4 text-sm font-normal text-[#637381]">
                  prefixsample
                </td>
                <td class="px-1 py-4 text-sm font-normal text-[#637381]">
                  <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    class="text-[#637381] bg-white border focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                  >
                    Select Tags
                    <svg
                      class="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  <div
                    id="dropdown"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      class="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Tag 1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Tag 2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Tag 3
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Tag 4
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td class="flex px-2.5 py-4 text-sm font-normal text-[#637381]">
                  <button className="bg-[#605BFF] mx-1 flex justify-center items-center font-semibold rounded-md text-white text-xs p-1 ">
                    <h6 className=" mr-1">TAG 1</h6>
                    <IoMdClose />
                  </button>
                  <button className="bg-[#605BFF] mx-1 flex justify-center items-center font-semibold rounded-md text-white text-xs p-1 ">
                    <h6 className=" mr-1">TAG 2</h6>
                    <IoMdClose />
                  </button>
                  <button className="bg-[#605BFF] mx-1 flex justify-center items-center font-semibold rounded-md text-white text-xs p-1 ">
                    <h6 className=" mr-1">TAG 3</h6>
                    <IoMdClose />
                  </button>
                </td>
              </tr>



              <tr class="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                <td class="rounded-l-lg py-4 pl-3 text-sm font-normal text-[#637381]">
                  4
                </td>
                <td class="px-1 py-4 text-sm font-normal text-[#637381]">
                  www.google.com
                </td>
                <td class="px-1 py-4 text-sm font-normal text-[#637381]">
                  prefixsample
                </td>
                <td class="px-1 py-4 text-sm font-normal text-[#637381]">
                  <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    class="text-[#637381] bg-white border focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                  >
                    Select Tags
                    <svg
                      class="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  <div
                    id="dropdown"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      class="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Tag 1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Tag 2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Tag 3
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Tag 4
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td class="flex px-2.5 py-4 text-sm font-normal text-[#637381]">
                  <button className="bg-[#605BFF] mx-1 flex justify-center items-center font-semibold rounded-md text-white text-xs p-1 ">
                    <h6 className=" mr-1">TAG 1</h6>
                    <IoMdClose />
                  </button>
                  
                  <button className="bg-[#605BFF] mx-1 flex justify-center items-center font-semibold rounded-md text-white text-xs p-1 ">
                    <h6 className=" mr-1">TAG 3</h6>
                    <IoMdClose />
                  </button>
                </td>
              </tr>


              <tr class="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                <td class="rounded-l-lg py-4 pl-3 text-sm font-normal text-[#637381]">
                  5
                </td>
                <td class="px-1 py-4 text-sm font-normal text-[#637381]">
                  www.google.com
                </td>
                <td class="px-1 py-4 text-sm font-normal text-[#637381]">
                  prefixsample
                </td>
                <td class="px-1 py-4 text-sm font-normal text-[#637381]">
                  <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    class="text-[#637381] bg-white border focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                  >
                    Select Tags
                    <svg
                      class="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  <div
                    id="dropdown"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      class="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Tag 1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Tag 2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Tag 3
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Tag 4
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td class="flex px-2.5 py-4 text-sm font-normal text-[#637381]">
                  <button className="bg-[#605BFF] mx-1 flex justify-center items-center font-semibold rounded-md text-white text-xs p-1 ">
                    <h6 className=" mr-1">TAG 1</h6>
                    <IoMdClose />
                  </button>
                  <button className="bg-[#605BFF] mx-1 flex justify-center items-center font-semibold rounded-md text-white text-xs p-1 ">
                    <h6 className=" mr-1">TAG 2</h6>
                    <IoMdClose />
                  </button>
                  <button className="bg-[#605BFF] mx-1 flex justify-center items-center font-semibold rounded-md text-white text-xs p-1 ">
                    <h6 className=" mr-1">TAG 3</h6>
                    <IoMdClose />
                  </button>
                </td>
              </tr>
              
              
             
              
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default Uploaded;
