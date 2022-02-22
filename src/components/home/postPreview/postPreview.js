import React from "react";
import './postPreview.css'

function PostPreview({post}){
    return (
        <div className="article">
            <fieldset className={post.tag}>
                <legend>{post.tag}</legend>
                <div className="content">
                    <p>{post.body}</p>
                </div>
            </fieldset>
        </div>
    )
}

export default PostPreview;