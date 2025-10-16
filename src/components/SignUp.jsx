import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "Nigeria",
    sendEmails: true,
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        alert("Account created successfully!");
        setIsSubmitting(false);
      }, 1500);
    } else {
      setErrors(formErrors);
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-white">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(191,219,254,0.6),_transparent_40%),radial-gradient(circle_at_bottom_left,_#c084fc,_transparent_50%)]"></div>

      <div className="fixed top-0 w-full py-2.5 backdrop-blur-2xl left-6 z-20 flex items-center gap-2 ">
        <RiSecurePaymentLine className="size-8 text-purple-600" />
        <h1 className="text-3xl font-bold text-gray-800 fold">SwiftPay </h1>
      </div>

      {/* Centered Form */}
      <div className="flex items-center justify-center h-full py-12 px-4  mt-8 z-10">
        <div className="max-w-md w-full bg-white/40 backdrop-blur-lg rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="py-4 px-6">
            <h1 className="text-2xl text-purple-500 font-extrabold text-center fold">
              Sign up
            </h1>
            <p className="mt-3 text-gray-700 text-center ">
              Your road to smooth financial Life 🚀
            </p>
          </div>

          {/* Form Container */}
          <div className="px-6 py-8">
            {/* Social Login Buttons */}
            <div className="flex justify-center">
              <div className="space-y-3 w-[20rem]">
                <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-3xl py-2.5 px-4 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors">
                  <FcGoogle className="size-5" />
                  Continue with Google
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500 text-sm">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Sign Up Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-md focus:ring-2 focus:ring-purple-300 focus:border-purple-500 outline-none transition ${errors.firstName ? "border-red-500" : "border-gray-300"
                      }`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-md focus:ring-2 focus:ring-purple-300 focus:border-purple-500 outline-none transition ${errors.lastName ? "border-red-500" : "border-gray-300"
                      }`}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  placeholder="your@email.com"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 border rounded-md focus:ring-2 focus:ring-purple-300 focus:border-purple-500 outline-none transition ${errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div className="relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  placeholder="8+ characters"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 border rounded-md focus:ring-2 focus:ring-purple-300 focus:border-purple-500 outline-none transition ${errors.password ? "border-red-500" : "border-gray-300"
                    }`}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center mt-6"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <svg
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  )}
                </button>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-300 focus:border-purple-500 outline-none transition"
                >
                  <option value="Nigeria">Nigeria</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="India">India</option>
                  <option value="Ghana">Ghana</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Congo">Congo</option>
                  <option value="Russia">Russia</option>
                  <option value="Cameroon">Cameroon</option>
                </select>
              </div>

              <div className="flex items-start mt-5">
                <div className="flex items-center h-5">
                  <input
                    id="send-emails"
                    name="sendEmails"
                    type="checkbox"
                    checked={formData.sendEmails}
                    onChange={handleChange}
                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="send-emails" className="text-gray-700">
                    Send me helpful emails to find rewarding work and job leads.
                  </label>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agree-to-terms"
                    name="agreeToTerms"
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className={`w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 ${errors.agreeToTerms ? "border-red-500" : ""
                      }`}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agree-to-terms" className="text-gray-700">
                    Yes, I understand and agree to the{" "}
                    <a href="#" className="text-green-600 hover:underline">
                      SwiftPay Terms of Service
                    </a>
                    , including the{" "}
                    <a href="#" className="text-green-600 hover:underline">
                      User Agreement
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-green-600 hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </label>
                  {errors.agreeToTerms && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.agreeToTerms}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-purple-400 hover:bg-purple-700 text-black font-medium py-3 px-4 rounded-3xl transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-300 ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
              >
                {isSubmitting ? "Creating account..." : "Create my account"}
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?
                <Link to="/" className="text-green-600 font-medium hover:underline ml-1">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
