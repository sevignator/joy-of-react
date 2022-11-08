import React from "react";

import { NUM_OF_CHARACTERS } from '../../constants';
import { range } from '../../utils';

function Guess({ word }) {
  return (
    <p className="guess">
      {range(NUM_OF_CHARACTERS).map((index) => {
        return (
          <span
            key={index}
            className="cell"
          >
            {word && word[ index ]}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
