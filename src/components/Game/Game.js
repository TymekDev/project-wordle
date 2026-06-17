import React, { useEffect, useState } from "react";

import { range, sample } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import GuessInput from "./GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState(
    range(NUM_OF_GUESSES_ALLOWED).map(() => ({
      id: crypto.randomUUID(),
      guess: null,
    }))
  );

  const numGuesses = guesses.filter(({ guess }) => guess !== null).length;
  const gameWon = guesses.some(({ guess }) => guess === answer);
  const isGameFinished = gameWon || numGuesses >= NUM_OF_GUESSES_ALLOWED;

  function handleGuessSubmit(guess) {
    const nextIndex = guesses.findIndex(({ guess }) => guess === null);
    if (nextIndex === -1) {
      alert("No more guesses allowed");
      return;
    }

    setGuesses(
      guesses.toSpliced(nextIndex, 1, { ...guesses[nextIndex], guess })
    );
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleGuessSubmit={handleGuessSubmit}
        disabled={isGameFinished}
      />
      {isGameFinished && (
        <Banner answer={answer} numGuesses={numGuesses} gameWon={gameWon} />
      )}
    </>
  );
}

export default Game;
