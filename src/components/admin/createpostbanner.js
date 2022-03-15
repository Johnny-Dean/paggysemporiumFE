import React from "react";
const TagSelect = ({activeTagBtn, handleChange}) => {
    return (
        <div className='radio-button-container'>
            <label>
                <input id='tag' onChange={handleChange} type="radio" value="THOUGHTS" checked={'THOUGHTS' === activeTagBtn} />
                💭
            </label>
            <label>
                <input id='tag' onChange={handleChange} type="radio" value="MUSIC" checked={'MUSIC' === activeTagBtn} />
                🎵
            </label>
            <label>
                <input id='tag' onChange={handleChange} type="radio" value="LIFT" checked={'LIFT' === activeTagBtn} />
                💪
            </label>
            <label>
                <input id='tag' onChange={handleChange} type="radio" value="JIU JITSU" checked={'JIU JITSU' === activeTagBtn} />
                🥋
            </label>
        </div>
    )
}
// is there a way to reduce the redundanct of this component and pass it?
const InputField = ({id, placeholderText, value, handleChange}) => {
    return (
        <label className='custom-field'>
            <input onChange={handleChange} id={id} placeholder={placeholderText} maxLength={50} value={value}/>
        </label>
    )
}

// understand the use of redux now a bit, I think it would make this code look a lot cleaner
function CreatePostHead({handleChange, title, activeTag}){
    return (
        <div className='title-and-tag-container'>
            <InputField  id='title' placeholderText='Enter Title' value={title} handleChange={handleChange}/>
            <TagSelect activeTagBtn={activeTag} handleChange={handleChange}/>
        </div>
    )
}

export default CreatePostHead;