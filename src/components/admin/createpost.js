import React from "react";
import {useState} from "react";
import LiftForm from "./forms/liftform";
import './createpost.css'
import CreatePostHead from "./createpostbanner";
import postService from '../../services/posts'

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

    // id: 2,
    // title: "Music I've been listening to this month",
    // body: "This month I felt like listening to thsi music because lbah blah blah and I think that actually blah",
    // url: "https://open.spotify.com/embed/playlist/5gHtLtMlGfNklGVCZfNmPz?utm_source=generator",
    // tag: "MUSIC"

function CreatePost(){
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [embedLink, setEmbedLink] = useState('')
    const [workout, setWorkout] = useState([])
    const [activeTag, setActiveTag] = useState('THOUGHTS')

    const handleSubmit = (e) => {
        e.preventDefault()
        const postObj = {
            title: title,
            body: body,
            embedLink: embedLink,
            workout: workout,
            tag: activeTag
        }
        console.log(postObj)
        postService.create(postObj)
            .then(res => console.log(res))
    }

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
                return <LiftForm setWorkout={setWorkout} workout={workout}/>
            default:
                return;
        }
    }
        return(
            <form className='container'>
                <CreatePostHead handleChange={handleChange} title={title} activeTag={activeTag} />
                {customFormGenerator(activeTag)}
                <TextArea id='body' placeholderText='Enter Body' value={body} handleChange={handleChange}/>
                <button type='submit' onClick={handleSubmit}>Post</button>
            </form>
        )
}

export default CreatePost;