import React, { useEffect, useState } from 'react';
import Jokes from './Jokes';

const Appjokes = () => {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/Programming')
      .then(res => res.json())
      .then(setJoke);
  }, []);

  return <div align="center">{joke && <Jokes joke={joke} />}</div>;
};

export default Appjokes;
