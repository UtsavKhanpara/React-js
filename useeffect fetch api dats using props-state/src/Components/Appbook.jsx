import React, { useEffect, useState } from 'react'
import Book from './Book'


const Appbook = () => {

  let [book, setBook] = useState([]);

  let getBook = () => {
    fetch('https://www.freetestapi.com/api/v1/books')
      .then(res => res.json())
      .then((data) => {
        setBook(data)
        console.log(data)
      }).catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getBook()
  }, []);


  return (
    <div>
      <Book bookdata={book} />
    </div>
  )
}

export default Appbook
