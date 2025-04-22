import React, { useEffect, useState } from 'react'
import Quotes from './Quotes'

const AppQuotes = () => {

  let [quot, setQuot] = useState([]);

  let getQuotes = () => {
    fetch('https://dummyjson.com/quotes')
      .then(res => res.json())
      .then((d) => {
        setQuot(d.quotes)
        console.log(d.quotes);
      }).catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getQuotes();
  }, [])


  return (
    <div>
      <Quotes quotes={quot} />
    </div>
  )
}

export default AppQuotes
