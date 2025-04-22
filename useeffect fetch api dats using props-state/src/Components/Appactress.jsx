import React, { useEffect, useState } from 'react'
import Actress from './Actress'

const Appactress = () => {

  let [actress, setActress] = useState([]);

  let getactress = () => {
    fetch('https://www.freetestapi.com/api/v1/actresses')
      .then(res => res.json())
      .then((data) => {
        setActress(data)
        console.log(data);
      }).catch((e) => {
        console.log(e);
      })
  }

  useEffect(() => {
    getactress();
  }, []);

  return (
    <div>
      <Actress actressdata={actress} />
    </div>
  )
}

export default Appactress
