import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {

  const [isSignup, setIsSignup] = useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword,
    setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex bg-[#f3f3f3]">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 bg-black relative overflow-hidden items-center justify-center">

        <div className="absolute bottom-[-150px] left-[-120px] w-[320px] h-[320px] bg-orange-600/40 blur-[120px]" />

        <div className="relative z-10 max-w-md text-white px-10">

          <h1 className="text-3xl font-semibold mb-10">
            ISERKPC
          </h1>

          <h2 className="text-5xl font-semibold mb-5 leading-tight">

            {isSignup
              ? "Create Account 🚀"
              : "Welcome Back! 👋"}

          </h2>

          <p className="text-orange-500 text-lg mb-5">

            {isSignup
              ? "Build your dream PC with us"
              : "Ready to customize your dream PC?"}

          </p>

          <p className="text-gray-300 leading-8 text-[15px]">

            {isSignup
              ? "Create your account and start exploring premium PC builds, accessories and custom setups."
              : "Log in to access your account and continue building the perfect setup."}

          </p>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex items-center justify-center p-6">

        <div className="w-full max-w-[450px] bg-[#f6f6f6] rounded-2xl shadow-sm border border-gray-200 p-8">

          {/* TITLE */}
          <h2 className="text-5xl font-medium text-black mb-2">

            {isSignup ? "Sign Up" : "Sign In"}

          </h2>

          <p className="text-sm text-gray-500 mb-8">

            {isSignup
              ? "Already have an account?"
              : "Don't have an account?"}

            <button
              onClick={() =>
                setIsSignup(!isSignup)
              }
              className="text-blue-500 ml-1"
            >

              {isSignup
                ? "Sign In"
                : "Sign Up"}

            </button>

          </p>

          {/* NAME */}
          {isSignup && (
            <div className="mb-5">
              <label className="block text-sm mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full h-12 rounded-lg border border-gray-200 px-4 outline-none focus:border-orange-500 bg-white"
              />
            </div>
          )}

          {/* EMAIL */}
          <div className="mb-5">

            <label className="block text-sm mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-12 rounded-lg border border-gray-200 px-4 outline-none focus:border-orange-500 bg-white"
            />

          </div>

          {/* PASSWORD */}
          <div className="mb-5">

            <div className="flex items-center justify-between mb-2">

              <label className="text-sm">
                Password
              </label>

              {!isSignup && (
                <span className="text-xs text-blue-500 cursor-pointer">
                  Forgot Password?
                </span>
              )}

            </div>

            <div className="relative">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Password"
                className="w-full h-12 rounded-lg border border-gray-200 px-4 pr-12 outline-none focus:border-orange-500 bg-white"
              />

              <button
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >

                {showPassword
                  ? <EyeOff size={18} />
                  : <Eye size={18} />}

              </button>

            </div>
          </div>

          {/* CONFIRM PASSWORD */}
          {isSignup && (
            <div className="mb-5">

              <label className="block text-sm mb-2">
                Confirm Password
              </label>

              <div className="relative">

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm Password"
                  className="w-full h-12 rounded-lg border border-gray-200 px-4 pr-12 outline-none focus:border-orange-500 bg-white"
                />

                <button
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                >

                  {showConfirmPassword
                    ? <EyeOff size={18} />
                    : <Eye size={18} />}

                </button>

              </div>
            </div>
          )}

          {/* BUTTON */}
          <button className="w-full h-12 rounded-full bg-orange-500 hover:bg-orange-600 transition text-white font-medium mb-6">

            {isSignup
              ? "Create Account"
              : "Sign In"}

          </button>

          {/* DIVIDER */}
          <div className="flex items-center gap-4 mb-6">

            <div className="flex-1 h-[1px] bg-gray-300" />

            <span className="text-gray-400 text-sm">
              or
            </span>

            <div className="flex-1 h-[1px] bg-gray-300" />

          </div>

          {/* GOOGLE */}
          <button className="w-full h-12 rounded-full border border-gray-300 bg-white hover:bg-gray-50 transition flex items-center justify-center gap-3">

            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />

            <span className="text-sm font-medium text-gray-700">

              {isSignup
                ? "Sign up with Google"
                : "Sign in with Google"}

            </span>

          </button>

        </div>
      </div>
    </div>
  );
};

export default Login;