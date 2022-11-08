import React from 'react';

import GuessResults from '../GuessResults/GuessResults';
import GuessInput from '../GuessInput';

function Game() {
  const [ guesses, setGuesses ] = React.useState([]);

  return (
    <>
      <GuessResults
        guesses={guesses}
      />
      <GuessInput
        guesses={guesses}
        setGuesses={setGuesses}
      />
    </>
  );
}

export default Game;
