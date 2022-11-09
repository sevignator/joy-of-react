import React from 'react';

import Banner from '../Banner';
import GuessResults from '../GuessResults';
import GuessInput from '../GuessInput';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';


function Game() {
  const [ answer, setAnswer ] = React.useState(sample(WORDS));
  const [ guesses, setGuesses ] = React.useState([]);
  const lastGuess = guesses.at(-1);
  let gameStatus = "running";
  let banner;

  console.info({ answer });

  if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
    gameStatus = "lost";
    banner = (
      <Banner type="sad">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        <button onClick={resetGame}>New game</button>
      </Banner>
    );
  }

  if (lastGuess === answer) {
    gameStatus = "won";
    banner = (
      <Banner type="happy">
        <p><strong>Congratulations!</strong> Got it in <strong>{guesses.length} guess{guesses.length > 1 && "es"}</strong>.</p>
        <button onClick={resetGame}>New game</button>
      </Banner>
    );
  }

  function resetGame() {
    setAnswer(sample(WORDS));
    setGuesses([]);
    gameStatus = "running";
  }

  return (
    <>
      {banner}
      <GuessResults
        answer={answer}
        guesses={guesses}
      />
      <GuessInput
        guesses={guesses}
        setGuesses={setGuesses}
        gameStatus={gameStatus}
      />
    </>
  );
}

export default Game;
