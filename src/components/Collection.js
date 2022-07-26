import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import flower from "../images/flower.gif";
import { pokemons } from "../pokemons";

const Collection = () => {
  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center bg-no-repeat bg-cover py-12"
      style={{
        backgroundImage: `url(${flower})`,
      }}
    >
      <div
        className={`${
          localStorage.length > 1 ? "w-4/5" : "max-w-sm"
        } flex flex-col justify-center items-center bg-blue-200/80 drop-shadow-xl p-12 rounded-3xl`}
      >
        <div
          className={`grid gap-4 ${
            localStorage.length > 2 ? "lg:grid-cols-3" : "grid-cols-auto"
          } ${
            localStorage.length < 3 ? "lg:grid-cols-2" : "grid-cols-auto"
          } lg:grid-rows-auto`}
        >
          {localStorage.length > 0 ? (
            pokemons.map((pokemon, index) => {
              var collectedPokemonIdx = localStorage.getItem(pokemon.name);
              if (collectedPokemonIdx) {
                return (
                  <div
                    key={index}
                    className="w-full flex bg-white/50 border-2 border-white rounded-3xl p-6 justify-between items-center"
                  >
                    <div className="flex flex-col justify-center items-center">
                      <img
                        className="w-[180px] sm:w-[250px] my-4"
                        src={pokemons[collectedPokemonIdx].img}
                        alt="pokemon"
                      />
                      <h1 className="font-SpaceMono font-bold text-gray-600 text-lg">
                        {pokemons[collectedPokemonIdx].name}
                      </h1>
                    </div>
                    <div className="flex flex-col font-SpaceMono text-sm text-gray-600 mx-1 sm:mx-7">
                      <h1>Hp: {pokemons[collectedPokemonIdx].hp}</h1>
                      <h1>Attack: {pokemons[collectedPokemonIdx].attack}</h1>
                      <h1>Defense: {pokemons[collectedPokemonIdx].defense}</h1>
                      <h1>Type: {pokemons[collectedPokemonIdx].type}</h1>
                    </div>
                  </div>
                );
              }
            })
          ) : (
            <div>
              <h1 className="font-SpaceMono font-bold text-gray-600 text-lg text-center">
                You have not collected any pokemons yet!
              </h1>
            </div>
          )}
        </div>
      </div>
      <div className="flex my-4">
        <Link
          to="/"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <button className="font-SpaceMono text-base text-white bg-gray-400 rounded-3xl px-6 py-2 m-1 drop-shadow-md">
            Home
          </button>
        </Link>
        <Link
          to="/catch-pokemon"
          onClick={() => {
            window.location.href = "/catch-pokemon";
          }}
        >
          <button className="font-SpaceMono text-base text-white bg-gray-400 rounded-3xl px-6 py-2 m-1 drop-shadow-md">
            Catch a pokemon
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Collection;
