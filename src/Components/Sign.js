import React from "react";
// import "./Sign.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillDiscord } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import { Link } from "react-router-dom";

function Sign() {
  return (
    <div className="sm:flex h-screen">
      <div className="relative bg-[#605BFF] flex flex-row sm:flex-col sm:justify-around items-center p-4 sm:w-1/2 sm:clip-diagonal">
        <div className="sm:self-start ">
          <div className="bg-white h-5 sm:h-10 w-5 sm:w-10 rounded-full mr-3"></div>
        </div>
        <div className="sm:text-[72px] text-[20px] sm:font-bold text-white tracking-widest">
          BASE
        </div>
        <div className="hidden sm:flex">
          <FaGithub size={"40px"} color="white" className=" md:mx-4" />
          <AiFillTwitterCircle
            size={"40px"}
            color="white"
            className="md:mx-4"
          />
          <FaLinkedin size={"40px"} color="white" className=" md:mx-4" />
          <AiFillDiscord size={"40px"} color="white" className=" md:mx-4" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center sm:w-1/2 bg-[white] px-3 my-3">
        <div>
          <h1 className="sm:text-[36px] text-[24px] font-bold">Sign In</h1>
          <h6 className="font-normal text-[16px] my-4">
            Sign in to your account
          </h6>
          <div className="flex my-4">
            <button
              type="button"
              class="text-slate-400 bg-[#F8FAFF] hover:bg-[white]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
            >
              <FcGoogle className="text-2xl sm:mx-4" />
              Sign in with Google
            </button>
            <button
              type="button"
              class="text-slate-400 bg-[#F8FAFF] hover:bg-[white]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
            >
              <GrApple className="text-2xl sm:mx-4" />
              Sign in with Apple
            </button>
          </div>

          <form className="bg-[#F8FAFF] p-5 rounded-md">
            <h6 className="my-4">Email address</h6>
            <input
              type="text"
              id="name"
              class="bg-[#F5F5F5] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="enter your name..."
              required
            />
            <h6 className="my-4">Password</h6>
            <input
              type="password"
              id="password"
              class="bg-[#F5F5F5] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="enter the password..."
              required
            />
            <h6 className="my-4 text-[#346BD4]">Forgot password</h6>
            <Link to={"/upload"}>
              <button
                class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#605BFF] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full"
                type="button"
              >
                sign in
              </button>
            </Link>
            <div className="my-4 sm:flex flex-row justify-center">
              <h6 className=" text-center">Don't have an account? </h6>
              <h5 className="text-[#605BFF] text-center ml-2">
                {" "}
                Register here
              </h5>
            </div>
            <div className="sm:hidden flex justify-center">
              <FaGithub size={"35px"} color="grey" className=" mx-2" />
              <AiFillTwitterCircle
                size={"35px"}
                color="grey"
                className="md:mx-2"
              />
              <FaLinkedin size={"35px"} color="grey" className=" mx-2" />
              <AiFillDiscord size={"35px"} color="grey" className=" mx-2" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sign;
