import Guess from "./Guess";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ guess, id }) => {
        return <Guess key={id} guess={guess} />;
      })}
    </div>
  );
}
export default GuessResults;
