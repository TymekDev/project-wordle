import { useState } from "react";
import { NUM_OF_LETTERS } from "../../constants";

function GuessInput({ handleGuessSubmit, disabled }) {
  const [guess, setGuess] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (disabled) {
      return;
    }

    if (guess.length !== NUM_OF_LETTERS) {
      alert(`Guess must be ${NUM_OF_LETTERS} letters long`);
      return;
    }

    handleGuessSubmit(guess);
    setGuess("");
  }

  return (
    <>
      <slot />
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          id="guess-input"
          type="text"
          minLength={NUM_OF_LETTERS}
          maxLength={NUM_OF_LETTERS}
          pattern={`[a-zA-Z]{${NUM_OF_LETTERS}}`}
          title={`${NUM_OF_LETTERS} letter word`}
          value={guess}
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
          disabled={disabled}
        />
      </form>
    </>
  );
}
export default GuessInput;
