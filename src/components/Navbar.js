import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => {
    setNav(!nav);
  };
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div>
      <div className="w-screen h-[80px] z-10 bg-blue-200 drop-shadow-lg relative">
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="flex items-center">
            <h1
              className="text-3xl font-SpaceMono text-gray-600  hover:cursor-pointer transition-all font-bold mx-5"
              onClick={handleReload}
            >
              <Link to="/" smooth={true} duration={500}>
                Gotta Catch 'em All
              </Link>
            </h1>
          </div>
          <div>
            <ul className="hidden lg:flex">
              <li className="text-lg p-5 text-gray-600 font-bold font-SpaceMono hover:text-blue-400 hover:cursor-pointer">
                <Link
                  to="/catch-pokemon"
                  onClick={() => {
                    window.location.href = "/catch-pokemon";
                  }}
                >
                  Catch a Pokemon
                </Link>
              </li>
              <li className="text-lg p-5 ld text-gray-600 font-bold font-SpaceMono hover:text-blue-400 hover:cursor-pointer">
                <Link to="/collection">My collection</Link>
              </li>
              <li className="text-lg p-5 ld text-gray-600 font-bold font-SpaceMono hover:text-blue-400 hover:cursor-pointer">
                <Link to="/login">Login / Signup</Link>
              </li>
            </ul>
          </div>
          <div className="lg:hidden mr-4" onClick={handleClick}>
            {!nav ? (
              <MenuIcon className="w-5 hover:cursor-pointer transition-all hover:scale-125 text-gray-600" />
            ) : (
              <XIcon className="w-5 hover:cursor-pointer transition-all hover:scale-125  text-gray-600" />
            )}
          </div>
        </div>
        <div className="lg:hidden">
          <ul
            className={
              !nav
                ? "hidden"
                : "absolute bg-blue-200 drop-shadow-xl w-full px-5"
            }
          >
            <li className="text-lg p-5 text-gray-600 font-SpaceMono hover:text-blue-400 hover:cursor-pointer border-t-2 border-gray-400 w-full transition-all">
              <Link
                to="/catch-pokemon"
                onClick={handleClose}
                smooth={true}
                duration={500}
              >
                Catch a Pokemon
              </Link>
            </li>
            <li className="text-lg p-5 text-gray-600 font-SpaceMono hover:text-blue-400 hover:cursor-pointer border-t-2 border-gray-400 w-full transition-all">
              <Link
                onClick={handleClose}
                to="/collection"
                smooth={true}
                duration={500}
              >
                My collection
              </Link>
            </li>
            <li className="text-lg p-5 text-gray-600 font-SpaceMono hover:text-blue-400 hover:cursor-pointer border-t-2 border-gray-400 w-full transition-all">
              <Link
                onClick={handleClose}
                to="/login"
                smooth={true}
                duration={500}
              >
                Login / Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
