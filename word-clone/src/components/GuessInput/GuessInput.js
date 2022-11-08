import React from "react";

function GuessInput({ guesses, setGuesses }) {
  console.log("render");
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
        minLength={5}
        maxLength={5}
        pattern='\w{5}$'
        value={inputText}
        onChange={handleChange}
      />
    </form>
  );
}

export default GuessInput;
