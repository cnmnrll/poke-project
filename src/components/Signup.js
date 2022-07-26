import React from "react";
import { Link } from "react-router-dom";
import flower from "../images/flower.gif";

const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${flower})`,
      }}
    >
      <div className="w-4/5 h-3/5 max-w-md flex flex-col justify-center items-center bg-blue-200/80 drop-shadow-xl p-12 rounded-3xl">
        <form className="w-full">
          <div>
            <label className="font-SpaceMono text-lg text-gray-600 mx-2">
              Username
            </label>
            <br />
            <input
              type="text"
              placeholder="Choose a username"
              className="w-full font-SpaceMono px-6 py-2 mb-2 rounded-3xl drop-shadow-md focus:outline-gray-500"
            />
            <br />
            <label className="font-SpaceMono text-lg text-gray-600 mx-2">
              Password
            </label>
            <br />
            <input
              type="password"
              placeholder="Choose a password"
              className="w-full font-SpaceMono px-6 py-2 mb-2 rounded-3xl drop-shadow-md focus:outline-gray-500"
            />
            <br />
            <label className="font-SpaceMono text-lg text-gray-600 mx-2">
              Confirm Password
            </label>
            <br />
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full font-SpaceMono px-6 py-2 mb-2 rounded-3xl drop-shadow-md focus:outline-gray-500"
            />
            <br />
          </div>
          <div className="flex flex-col">
            <button
              className="font-SpaceMono text-base text-white bg-gray-400 rounded-3xl px-6 py-2 mt-6 drop-shadow-md"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <div className="my-2 bg-transparent">
        <h1 className="font-SpaceMono text-gray-600 drop-shadow-lg">
          Already have an account?{" "}
          <Link to="/login" className="text-black underline">
            Log In
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Signup;
