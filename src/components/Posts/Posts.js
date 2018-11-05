import React from 'react';
import Post from './Post/Post';
import './Posts.css'

const posts = (props) => {
    return(
        <div className="Posts">
            {
                props.posts.map(post => {
                   return <Post 
                      key={post.id}
                      title={post.title}
                      text={post.text}
                      delete={props.postDelete.bind(null, post.id)}/>
                })
            }
        </div>
    )
}

export default posts;