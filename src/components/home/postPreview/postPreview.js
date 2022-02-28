import React from "react";
import './postPreview.css'
import Lift from './lifting'

const Music = ({url, body, id}) => {
    return (
            <>
                <div className='music-container'>
                    <iframe
                        title={id}
                        style={{borderRadius: "12px", marginBottom: "1em", marginTop: ".5em"}}
                        src={url}
                        width="90%" height="240" frameBorder="0" allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    />
                </div>
                    <p>{body}</p>

            </>
    )
}

let getEmoji = (tag) => {
    switch (tag){
        case 'MUSIC':
            return '🎵'
        case 'LIFT':
            return '💪'
        case 'JIU JITSU':
            return '🥋'
        case 'THOUGHTS':
            return '💭'
        default:
            return 'not valid tag'
    }
}

function PostPreview({post}){
    let content;
    switch (post.tag){
        case 'MUSIC':
            content = <Music url={post.url} body={post.body} id={post.id}/>
            break
        case 'LIFT':
            content = <Lift body={post.body} workout={'Pull One'} />
            break
        default:
            content = <p>{post.body}</p>
    }


    return (
        <div className="article">
            <fieldset className={post.tag}>
                <legend> <span className='spacing'> {getEmoji(post.tag)} </span>  </legend>
                <div className="content">
                    {content}
                </div>
            </fieldset>
        </div>
    )
}

export default PostPreview;