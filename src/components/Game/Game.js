import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "./GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  function handleGuessSubmit(guess) {
    console.log("guess submitted: ", guess);
  }

  return <GuessInput handleGuessSubmit={handleGuessSubmit} />;
}

export default Game;
