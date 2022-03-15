import React, {useState} from "react";
import CreatePostHead from "../createpostbanner";
import './liftform.css'
const Button = ({handleClick, label}) => {
    return (
        <button onClick={handleClick}>{label}</button>
    )
}
const ExerciseInput = ({handleChange, id}) => {
    const [exercise, setExercise] = useState({

    })

    return (
        <label className='input-container' id={id}>
            <input onChange={handleChange} placeholder='Name' />
            <input onChange={handleChange} placeholder='Weight' />
            <input onChange={handleChange} placeholder='Reps' />
            <input onChange={handleChange} placeholder='Sets' />
        </label>
    )
}

const LiftForm = () => {

    const [numExercise, setNumExercise] = useState(1)


    return (
            <div className='lift-container'>

            </div>
    )
}

export default LiftForm;