import React from "react";
import {useState} from "react";
import LiftForm from "./forms/liftform";
import './createpost.css'
import CreatePostHead from "./createpostbanner";
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


function CreatePost(){
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [embedLink, setEmbedLink] = useState('')
    const [activeTag, setActiveTag] = useState('LIFT')
    const [workout, setWorkout] = useState([])

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
                setActiveTag(newValue)
                break;
            default:
                console.log(`something went wrong: ` + event.target.id)
        }
    }
    const customFormGenerator = (tag) => {
        switch (tag){
            case 'MUSIC':
                return <InputField id='link' placeholderText='Paste Embed Link' value={embedLink} handleChange={handleChange}/>
            case 'LIFT':
                return <LiftForm />
            default:
                return;
        }
    }
        return(
            <form className='container'>
                <CreatePostHead handleChange={handleChange} title={title} activeTag={activeTag} />
                {customFormGenerator(activeTag)}
                <TextArea id='body' placeholderText='Enter Body' value={body} handleChange={handleChange}/>
                {/*<button type='submit'>Post</button>*/}
            </form>
        )
}

export default CreatePost;