import React from "react";

function GuessesList({ guesses }) {
  return (
    <div class="guess-results">
      {guesses.map((guess, index) => {
        return (
          <p
            key={index}
            className="guess"
          >
            {guess}
          </p>
        );
      })}
    </div>
  );
}

export default GuessesList;
