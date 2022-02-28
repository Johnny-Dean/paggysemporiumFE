import React, {useState} from "react";

const NumberInputField = ({handleChange, id, value}) => {
    return (
        <label className='custom-field'>
            <input type='number' min={1} onChange={handleChange} id={id} value={value} />
        </label>
    )
}

const LiftForm = () => {
    const [workout, setWorkout] = useState([])
    const [numExercises, setNumExercises] = useState(1)

    const handleChange = (e) => {
        console.log(e)
    }

    return (
        <NumberInputField handleChange={handleChange} id={1} value={numExercises} />
    )
}

export default LiftForm;