import React, { useState, useRef, useEffect } from "react";
import VerificationOtp from "./VerificationOtp";

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [otpPopup, setOtpPopup] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
    setOtpPopup(false);
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  // Handle "Next" button click
  const handleNextClick = () => {
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      setErrorMessage("Please fill in a valid 10-digit mobile number");
    } else {
      setErrorMessage("");
      setOtpPopup(true);
    }
  };

  //Handles OTP

  return (
    <div className="fixed inset-0 flex items-center justify-center   backdrop-blur-sm z-50    bg-[rgba(0,0,0,0.27)] ">
      <div className="relative w-full max-w-[525px] bg-white rounded-[30px] shadow-lg px-8 py-11 border-2 border-[#DCDCDC] ">
        <div className="space-y-4 text-center ">
          <img
           
            src="/img/Logo.webp"
            loading="lazy"
            className="w-[205px] mx-auto "
            alt="Logo"
          />
          <h2 className="text-2xl text-[#151515] font-bold font-onest -mb-5">
            Welcome Back 👋
          </h2>
        </div>

        <div className="mt-10 grid space-y-6">
          <div className="relative">
            <label
              for="number"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              name="text"
              id="text"
              className="flex items-center justify-center bg-white border border-gray-300 rounded-full w-full h-12 px-6 text-gray-900 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 mb-5"
              placeholder="Enter you name here"
              required=""
            />
            <label
              for="number"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Phone Number
            </label>
            <input
              type="number"
              name="number"
              id="number"
              value={phoneNumber}
              onChange={handleInputChange}
              className="flex items-center justify-center bg-white border border-gray-300 rounded-full w-full h-12 px-6 text-gray-900 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400"
              placeholder="eg: 9988776655"
              required=""
            />

            {phoneNumber.length > 0 && (
              <button
                onClick={handleNextClick}
                className="absolute right-2 top-[23px] mt-[108px] cursor-pointer group w-fit py-1  px-6 border-2 bg-blue-500 rounded-full hover:bg-white hover:text-blue-500 text-white  "
              >
                Get OTP
              </button>
            )}
          </div>
          {/* OTP Verification */}

          {otpPopup && <VerificationOtp />}

          {/* Error message */}
          {errorMessage && (
            <div className="text-red-500 text-sm -mt-2">{errorMessage}</div>
          )}
          {/* OR Separator with lines */}
          <div className="flex items-center justify-center space-x-2">
            <hr className="flex-1 border-t border-gray-300" />
            <span className="text-gray-500">OR</span>
            <hr className="flex-1 border-t border-gray-300" />
          </div>
          {/* Google Login Button */}
          <button className="cursor-pointer group h-12 px-6 border-2 border-gray-300 rounded-full hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
            <div className="relative flex items-center justify-center space-x-4">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="absolute left-4 w-5"
                alt="Google"
              />
              <span className="block font-semibold tracking-wide text-gray-700 text-sm group-hover:text-blue-600 sm:text-base">
                Continue with Google
              </span>
            </div>
          </button>
        </div>

        <div className="mt-10 text-xs text-gray-600 text-center">
          <p>
            By proceeding, you agree to our{" "}
            <a href="/privacy-policy/" className="underline">
              Terms of Use
            </a>{" "}
            and confirm you have read our{" "}
            <a href="/privacy-policy/" className="underline">
              Privacy and Cookie Statement
            </a>
            .
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 cursor-pointer opacity-20 hover:opacity-60"
        >
          <img src="/img/close.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
