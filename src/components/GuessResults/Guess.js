import { NUM_OF_LETTERS } from "../../constants";
import { range } from "../../utils";

function Guess({ guess }) {
  const letters = !!guess
    ? guess.split("")
    : range(NUM_OF_LETTERS).map(() => "");

  return (
    <p className="guess">
      {letters.map((letter, index) => {
        return (
          <span key={index} className="cell">
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
