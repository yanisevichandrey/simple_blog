import React from 'react';
import './Post.css'

const post = (props) => {
    return(
        <div className="Post" >
            <div className="Post_title">{props.title}</div>
            <div className="Post_text">{props.text}</div>
            <span className="Post_delete" onClick={props.delete}>x</span>
        </div>
    )
}

export default post;