import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (guess.length !== 5) {
      window.alert('Please enter exactly 5 characters.');
      return;
    }

    setGuess('');
  }

  return (
    <form onSubmit={handleSubmit} className='guess-input-wrapper'>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
        id='guess-input'
        type='text'
      />
    </form>
  );
}

export default GuessInput;
