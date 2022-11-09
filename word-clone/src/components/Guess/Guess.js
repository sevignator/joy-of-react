import React from "react";

import { NUM_OF_CHARACTERS } from '../../constants';
import { range } from "../../utils";

function Cell({ status, letter }) {
  return (
    <span className={`cell ${status}`}>
      {letter}
    </span>
  );
}

function Guess({ result }) {
  return (
    <p className="guess">
      {range(NUM_OF_CHARACTERS).map((index) => {
        return (
          <Cell
            key={index}
            status={result?.[ index ].status}
            letter={result?.[ index ].letter}
          />
        );
      })}
    </p>
  );
}

export default Guess;
