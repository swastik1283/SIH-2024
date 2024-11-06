import React, { useState } from "react";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import "../Css/ResetPassword.css";

const ResetPassword = () => 
{
  const [isVisible, setIsVisible] = useState(false);

  function handlePasswordClick() 
  {
    setIsVisible((curVal) => !curVal);
  }

  return (
    <section>
      <div className="relative items-center w-full mx-auto p-5 max-w-7xl">
        <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
          <div className="flex flex-col">
            <div>
              <h2 className="text-4xl text-color">Reset password</h2>
            </div>
          </div>
          <form>
            <div className="mt-4 space-y-6">
              <div className="col-span-full">
                <label className="block mb-1 text-sm font-medium">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={isVisible ? "text" : "password"}
                    placeholder="********"
                    name="password"
                    id="password"
                    className={`block w-full p-3 text-black bg-white border border-gray-200 appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm reset-input border border-gray-700 Passwordclass`}
                  />
                  <span
                    className="w-1/9 h-full flex items-center justify-end absolute top-0 right-0"
                    onClick={handlePasswordClick}
                  >
                    {isVisible ? (
                      <BiSolidShow className="text-gray-500 text-xl mr-3 hover:text-gray-800" />
                    ) : (
                      <BiSolidHide className="text-gray-500 text-xl mr-3 hover:text-gray-800" />
                    )}
                  </span>
                </div>

              </div>
              <div className="col-span-full ">
                <label className="block mb-1 text-sm font-medium ">
                  Confirm password
                </label>
                <div className="relative">
                  <input
                    type={isVisible ? "text" : "password"}
                    placeholder="********"
                    name="password"
                    id="password"
                    className={`block w-full p-3 text-black bg-white border border-gray-200 appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm reset-input border border-gray-700 Passwordclass`}
                  />
                  <span
                    className="w-1/9 h-full flex items-center justify-end absolute top-0 right-0"
                    onClick={handlePasswordClick}
                  >
                    {isVisible ? (
                      <BiSolidShow className="text-gray-500 text-xl mr-3 hover:text-gray-800" />
                    ) : (
                      <BiSolidHide className="text-gray-500 text-xl mr-3 hover:text-gray-800" />
                    )}
                  </span>
                </div>
              </div>

              <div className="col-span-full">
                <button
                  type="submit"
                  className="items-center justify-center w-full px-6 py-2.5 text-center duration-200 nline-flex text-black focus:outline-none focus-visible:outline-black text-m focus-visible:ring-black bg-color reset-input font-semibold"
                >
                  Submit your request
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
