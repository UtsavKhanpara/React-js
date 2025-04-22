import React from 'react';

const Jokes = ({ joke }) => (
  <div>
    <h1>My Jokes API</h1>
    {joke.error ? (
      <p>Error: {joke.message}</p>
    ) : joke.type === 'single' ? (
      <p>{joke.joke}</p>
    ) : (
      <p><strong>{joke.setup}</strong> — {joke.delivery}</p>
    )}
  </div>
);

export default Jokes;
