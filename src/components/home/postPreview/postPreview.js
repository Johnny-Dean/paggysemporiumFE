import React from "react";
import './postPreview.css'

const Music = ({url, body, id}) => {
    console.log(url)
    return (
        <div>
            <iframe
                    title={id}
                    style={{borderRadius: "12px", marginBottom: "1em", marginTop: ".5em"}}
                    src={url}
                    width="90%" height="240" frameBorder="0" allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
            <p>{body}</p>
        </div>
    )
}

function PostPreview({post}){
    let content;

    switch (post.tag){
        case 'MUSIC':
            content = <Music url={post.url} body={post.body} id={post.id}/>
            break
        default:
            content = <p>{post.body}</p>

    }


    return (
        <div className="article">
            <fieldset className={post.tag}>
                <legend>{post.title}</legend>
                <div className="content">
                    {content}
                </div>
            </fieldset>
        </div>
    )
}

export default PostPreview;