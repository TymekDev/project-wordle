function Banner({ gameWon, numGuesses, answer }) {
  const classes = ["banner", gameWon ? "happy" : "sad"];

  return (
    <div className={classes.join(" ")}>
      {gameWon && (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{numGuesses} guesses</strong>.
        </p>
      )}
      {!gameWon && (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
