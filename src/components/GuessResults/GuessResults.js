function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ guess, id }) => {
        return (
          <p key={id} className="guess">
            {guess}
          </p>
        );
      })}
    </div>
  );
}
export default GuessResults;
