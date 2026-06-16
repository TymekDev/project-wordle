import { NUM_OF_LETTERS } from "../../constants";
import { range } from "../../utils";

function Guess({ checkedGuess }) {
  return (
    <p className="guess">
      {range(NUM_OF_LETTERS).map((index) => {
        const classes = ["cell", checkedGuess[index]?.status];

        return (
          <span key={index} className={classes.join(" ")}>
            {checkedGuess[index]?.letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
