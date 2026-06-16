import { checkGuess } from "../../game-helpers";
import Guess from "./Guess";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {guesses.map(({ guess, id }) => {
        return (
          <Guess
            key={id}
            checkedGuess={guess ? checkGuess(guess, answer) : []}
          />
        );
      })}
    </div>
  );
}
export default GuessResults;
