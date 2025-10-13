import React from "react";
import {
  FaArrowRight,
  FaShieldAlt,
  FaDollarSign,
  FaRegCreditCard,
} from "react-icons/fa";
import { BiSolidZap } from "react-icons/bi";
import { LuZap } from "react-icons/lu";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-br from-background via-indigo-500/50 to-pink-400 flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 py-20 md:py-28">
      {/* Background Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FaRegCreditCard className="text-pink-400/30 absolute top-1/4 left-[10%] w-8 h-8 animate-[float_6s_ease-in-out_infinite]" />
        <FaDollarSign className="text-pink-400/30 absolute top-[20%] right-[15%] w-10 h-10 animate-[float_8s_ease-in-out_infinite_1s]" />
        <FaShieldAlt className="text-pink-400/30 absolute bottom-[30%] left-[8%] w-6 h-6 animate-[float_7s_ease-in-out_infinite_2s]" />
        <BiSolidZap className="text-pink-400/30 absolute bottom-[12%] right-[10%] w-7 h-7 animate-[float_5s_ease-in-out_infinite_0.5s]" />
      </div>

      {/* Left Text Section */}
      <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:w-1/2">
        {/* Highlight Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-400/30 backdrop-blur-lg border border-pink-400/20 shadow-md animate-fade-in-up">
          <BiSolidZap className="size-5 text-pink-400/90" />
          <span className="text-sm font-medium text-gray-700 fold">
            Lightning-fast payments
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-pink-700 leading-tight fold">
          Payments <br className="hidden md:block" /> Made Swift & Simple
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-md fold">
          Send and receive money instantly. Secure, fast, and trusted by
          millions worldwide.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(37,99,235,0.6)]">
            <span className="relative z-10">Get Started Free</span>
            <FaArrowRight className="relative z-10" />
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
          </button>

          <button className="px-8 py-3 rounded-xl font-semibold text-blue-600 border border-blue-400/60 hover:bg-blue-50/60 hover:text-blue-700 transition-all duration-500 backdrop-blur-sm">
            Learn More
          </button>
        </div>

        {/* Extra Info */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-gray-600 mt-6">
          <div className="flex items-center gap-2 hover:text-gray-800 transition-colors">
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
            <span>No setup fees</span>
          </div>
          <div className="flex items-center gap-2 hover:text-gray-800 transition-colors">
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
            <span>24/7 support</span>
          </div>
        </div>
      </div>

    {/* Right Image Section */}
<div className="relative md:w-1/2 flex justify-center items-center mt-8 md:mt-[-25px] w-full px-6 sm:px-0">
  {/* Gradient Glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-300 rounded-2xl blur-3xl opacity-40 group-hover:blur-2xl transition-all duration-500"></div>

  {/* Main Image */}
  <img
    src="/hero-payment.png"
    alt="SwiftPay App Preview"
    className="relative w-full max-w-sm sm:max-w-md rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 object-contain"
  />

  {/* Floating Badge - Speed */}
  <div className="absolute top-[8%] right-[3%] bg-white/30 backdrop-blur-lg border border-white/20 px-4 py-2 rounded-xl shadow-xl flex items-center gap-2 animate-[float_4s_ease-in-out_infinite_1s]">
    <span className="text-pink-600/60 text-xl rounded-full p-2 mr-1 bg-pink-400/60">
      <LuZap />
    </span>
    <span className="text-gray-600 text-xs leading-tight">
      Avg. Speed <br />
      <span className="text-lg font-bold">2.3s</span>
    </span>
  </div>

  {/* Floating Badge - Users */}
  <div className="absolute bottom-[10%] left-[3%] w-[8.5rem] h-[4.5rem] bg-blue-600/30 backdrop-blur-lg border border-white/20 text-white rounded-xl shadow-xl transform hover:scale-[1.05] transition-transform duration-500 flex flex-col items-center justify-center">
    <p className="font-medium text-center leading-tight">
            Trusted by </p>
            <p className="text-2xl font-bold"> 2M+ users
    </p>
  </div>
</div>

    </section>
  );
};

export default Hero;
