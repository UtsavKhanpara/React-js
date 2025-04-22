import React, { useEffect, useState } from 'react'
import Currency from './Currency'

const Appcurrency = () => {

  let [currency, setCurrency] = useState([]);

  let getCurrency = () => {
    fetch('https://www.freetestapi.com/api/v1/currencies?limit=5')
      .then(res => res.json())
      .then((data) => {
        setCurrency(data)
        console.log(data)
      }).catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getCurrency()
  }, []);

  return (
    <div>
      <Currency currencydata={currency} />
    </div>
  )
}

export default Appcurrency
