import React, { useEffect, useState } from 'react';
import Comment from './Comment';

const AppComment = () => {

  let [comment, setComment] = useState([]); // ✅ FIXED here

  let getComment = () => {
    fetch('https://dummyjson.com/comments')
      .then(res => res.json())
      .then((data) => {
        setComment(data.comments);
        console.log(data.comments);
      }).catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getComment();
  }, [])

  return (
    <div>
      <Comment cmt={comment} />
    </div>
  );
}

export default AppComment;
