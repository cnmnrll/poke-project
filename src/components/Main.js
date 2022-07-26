import React, { useEffect, useState } from "react";
import flower from "../images/flower.gif";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { number } from "./Number";
import { pokemon_idx } from "./Pokemon.js";
import { Link } from "react-router-dom";
import { pokemons } from "../pokemons.js";

const Main = () => {
  var pokemon = pokemons[pokemon_idx].name;
  const [guesses, setGuesses] = useState([]);
  const [num, setNum] = useState("?");
  const [display, setDisplay] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [input, setInput] = useState("");
  const [statement, setStatement] = useState("");
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    var valid = true;
    const valids = "0123456789";
    var guess = parseInt(input);
    for (var i = 0; i < input.length; i++) {
      if (!valids.includes(input.charAt(i))) {
        valid = false;
        break;
      }
    }
    if (!valid) {
      setStatement("Invalid input, please only enter a number");
    } else if (guess === number) {
      localStorage.setItem(pokemon, pokemon_idx);
      setNum(input);
      setDisplay(!display);
      setCorrect(!correct);
      setStatement(
        "Congratulations! You guessed it! Pokemon added to collection"
      );
    } else if (guess < number) {
      setGuesses((prevGuesses) => [...prevGuesses, guess]);
      setStatement(`The number is higher than ${guess}, guess again!`);
    } else if (guess > number) {
      setGuesses((prevGuesses) => [...prevGuesses, guess]);
      setStatement(`The number is lower than ${guess}, guess again!`);
    }
  };
  useEffect(() => {
    if (guesses.length === 3) {
      setDisplay(!display);
      setStatement("3 tries used up! Pokemon returns to the wild...");
    }
  }, [guesses]);
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${flower})`,
      }}
    >
      <div className="w-full h-full flex flex-col justify-center items-center bg-blue-200/80 drop-shadow-xl p-12">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-SpaceMono text-3xl font-bold text-gray-600 text-center">
            Its {pokemons[pokemon_idx].name}!
          </h1>
          <div className="flex justify-center items-center">
            <img
              className="w-[180px] sm:w-[250px] my-10 mx-1 sm:mx-7"
              src={pokemons[pokemon_idx].img}
              alt="pokemon"
            />
            <div className="flex flex-col font-SpaceMono font-bold text-gray-600 mx-1 sm:mx-7">
              <h1>Hp: {pokemons[pokemon_idx].hp}</h1>
              <h1>Attack: {pokemons[pokemon_idx].attack}</h1>
              <h1>Defense: {pokemons[pokemon_idx].defense}</h1>
              <h1>Type: {pokemons[pokemon_idx].type}</h1>
            </div>
          </div>
          <h1 className="font-SpaceMono text-2xl font-bold text-gray-600 text-center">
            To catch this Pokemon, guess the number from 1 - 10!
          </h1>
        </div>
        <div className="w-5/6 max-w-xl flex flex-col items-center bg-white/40 drop-shadow-xl p-12 m-12 rounded-3xl">
          <div className="md:flex justify-between md:space-x-12 items-center">
            <h1 className="font-SpaceMono text-9xl font-bold text-gray-600 text-center">
              {num}
            </h1>
            <form>
              <div className="flex flex-col justify-center items-center">
                <label className="font-SpaceMono text-lg font-bold text-gray-600 text-center">
                  Make a guess :
                </label>
                <div className="flex flex-col justify-center items-center">
                  <div className="w-auto flex bg-white drop-shadow-md rounded-3xl p-2 m-2 justify-center items-center">
                    {display ? (
                      <input
                        type="text"
                        placeholder="Enter your guess"
                        className="font-SpaceMono text-center focus:outline-none"
                        onChange={handleChange}
                        value={input}
                        disabled
                      />
                    ) : (
                      <input
                        type="text"
                        placeholder="Enter your guess"
                        className="font-SpaceMono text-center focus:outline-none"
                        onChange={handleChange}
                        value={input}
                      />
                    )}
                    {display ? (
                      <button disabled>
                        <ArrowRightIcon className="w-5 text-gray-600 mx-2" />
                      </button>
                    ) : (
                      <button onClick={handleSubmit}>
                        <ArrowRightIcon className="w-5 hover:cursor-pointer hover:scale-125  transition-all text-gray-600 mx-2" />
                      </button>
                    )}
                  </div>
                  <h1 className="font-SpaceMono text-sm text-gray-600 text-center m-1">
                    {statement}
                  </h1>
                </div>
                <div>
                  {display ? (
                    <div className="flex mt-4">
                      {correct ? (
                        <Link to="/collection">
                          <button className="font-SpaceMono text-base text-white bg-gray-400 rounded-3xl px-6 py-2 m-1 drop-shadow-md">
                            View collection
                          </button>
                        </Link>
                      ) : (
                        <div></div>
                      )}
                      <button
                        className="font-SpaceMono text-base text-white bg-gray-400 rounded-3xl px-6 py-2 m-1 drop-shadow-md"
                        onClick={handleReload}
                      >
                        Try again
                      </button>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
