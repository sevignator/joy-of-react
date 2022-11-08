import React from "react";
import Guess from '../Guess/Guess';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        const word = guesses[ index ];

        return (
          <Guess
            key={index}
            word={word}
          />
        );
      })}
    </div>
  );
}

export default GuessResults;
