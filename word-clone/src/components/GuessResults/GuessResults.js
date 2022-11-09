import React from "react";
import Guess from '../Guess/Guess';

import { checkGuess } from "../../game-helpers";
import { range } from '../../utils';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ answer, guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        const result = checkGuess(guesses[ index ], answer);

        return (
          <Guess
            key={index}
            result={result}
          />
        );
      })}
    </div>
  );
}

export default GuessResults;
