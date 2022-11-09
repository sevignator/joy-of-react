import React from "react";

import { NUM_OF_CHARACTERS } from '../../constants';

function GuessInput({ guesses, setGuesses, gameStatus }) {
  const [ inputText, setInputText ] = React.useState("");

  function handleChange(event) {
    setInputText(event.target.value.toUpperCase());
  }

  function handleSubmit(event) {
    event.preventDefault();
    setGuesses([ ...guesses, inputText ]);
    setInputText("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={NUM_OF_CHARACTERS}
        maxLength={NUM_OF_CHARACTERS}
        value={inputText}
        onChange={handleChange}
        disabled={gameStatus !== "running"}
      />
    </form>
  );
};

export default GuessInput;
