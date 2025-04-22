import React, { useEffect, useState } from 'react'
import Post from './post'

const AppPost = () => {

  let [post, setPost] = useState([]);

  let getPost = () => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then((data) => {
        setPost(data.posts);
        console.log(data.posts)
      }).catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getPost()
  }, []);
  return (
    <div>
      <Post postdata={post} />
    </div>
  )
}

export default AppPost
