import React from "react";
import {useState} from "react";

import './createpost.css'
const InputField = ({id, placeholderText, value, handleChange}) => {
    return (
        <label className='custom-field'>
            <input onChange={handleChange} id={id} placeholder={placeholderText} maxLength={50} value={value}/>
        </label>
    )
}

const TextArea = ({id, placeholderText, value, handleChange}) => {
    return (
        <textarea onChange={handleChange} id={id} placeholder={placeholderText} value={value} maxLength={500}/>
    )

}

const TagSelect = ({activeTagBtn, handleChange}) => {
    return (
            <div className='radio-button-container'>
                <label>
                    <input id='tag' onChange={handleChange} type="radio" value="MISC" checked={'MISC' === activeTagBtn} />
                    Misc
                </label>
                <label>
                    <input id='tag' onChange={handleChange} type="radio" value="MUSIC" checked={'MUSIC' === activeTagBtn} />
                    Music
                </label>
                <label>
                    <input id='tag' onChange={handleChange} type="radio" value="LIFTING" checked={'LIFTING' === activeTagBtn} />
                    Lifting
                </label>
            </div>
    )
}

function CreatePost(){
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [embedLink, setEmbedLink] = useState('')
    const [tag, setTag] = useState('MISC')
    const [activeTag, setActiveTag] = useState('MISC')



    const handleChange = (event) => {
        let newValue = event.target.value
        switch (event.target.id){
            case 'title':
                setTitle(newValue)
                break;
            case 'body':
                setBody(newValue)
                break;
            case 'link':
                setEmbedLink(newValue)
                break;
            case 'tag':
                setTag(newValue)
                setActiveTag(newValue)
                break;
            default:
                console.log(`something went wrong: ` + event.target.id)
        }
    }

    return(
            <form className='container'>
                <div className='title-and-tag-container'>
                    <InputField  id='title' placeholderText='Enter Title' value={title} handleChange={handleChange}/>
                    {tag === 'MUSIC' && <InputField id='link' placeholderText='Paste Embed Link' value={embedLink} handleChange={handleChange}/>}
                    <TagSelect activeTagBtn={activeTag} handleChange={handleChange}/>
                </div>

                <TextArea id='body' placeholderText='Enter Body' value={body} handleChange={handleChange}/>
                <button type='submit'>Post</button>
            </form>
    )
}

export default CreatePost;