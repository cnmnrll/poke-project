import React from "react";
import flower from "../images/flower.gif";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${flower})`,
      }}
    >
      <div className="w-4/5 h-1/5 max-w-md flex justify-between space-x-12 items-center bg-blue-200/80 drop-shadow-xl p-12 m-2 rounded-3xl transition-all  cursor-default">
        <div>
          <h1 className="text-xl text-gray-600 font-SpaceMono font-bold">
            Catch a Pokemon !
          </h1>
          <p className="text-md text-gray-600 font-SpaceMono">
            Play a simple game to guess a number
          </p>
        </div>
        <div>
          <Link
            to="/catch-pokemon"
            onClick={() => {
              window.location.href = "/catch-pokemon";
            }}
          >
            <ArrowRightIcon className="w-6 hover:cursor-pointer hover:scale-125  transition-all text-gray-600" />
          </Link>
        </div>
      </div>
      <div className="w-4/5 h-1/5 max-w-md flex justify-between space-x-12 items-center bg-blue-200/80 drop-shadow-xl p-12 m-2 rounded-3xl transition-all  cursor-default">
        <div>
          <h1 className="text-xl text-gray-600 font-SpaceMono font-bold">
            My Collection
          </h1>
          <p className="text-md text-gray-600 font-SpaceMono">
            View the pokemons you own
          </p>
        </div>
        <div>
          <Link to="/collection">
            <ArrowRightIcon className="w-6 hover:cursor-pointer hover:scale-125  transition-all text-gray-600" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
