import React, {useState} from "react";
import './liftform.css'

const ExerciseInput = ({id, setWorkout, workout}) => {
    const [name, setName] = useState("")
    const [weight, setWeight] = useState(0)
    const [reps, setReps] = useState(0)
    const [sets, setSets] = useState(0)
    const [beenModified, setBeenModified] = useState(false)

    const handleSubmit = () => {
        const newExercise = {
            id: id,
            name: name,
            weight: weight,
            reps: reps,
            sets: sets
        }
        if (!beenModified){
            setWorkout(workout.concat(newExercise))
            setBeenModified(true)
        }  else {
            setWorkout(workout.map(
                exercise => {
                    if (exercise.id === newExercise.id) {
                        return newExercise
                    }
                    else {
                        return exercise
                    }
                }
            ))
        }
    }

    const handleChange = (e) => {
        const type = e.target.id
        const newVal = e.target.value
        switch (type) {
            case 'name':
                setName(newVal)
                break;
            case 'weight':
                setWeight(newVal)
                    break;
            case 'reps':
                setReps(newVal)
                break;
            case 'sets':
                setSets(newVal)
                break;
            default:
                console.log('an error occurred')
        }
    }

    return (
        <label className='input-container' id={id}>
            <input id='name' onChange={handleChange} onBlur={handleSubmit} placeholder='Name' />
            <input id='weight' onChange={handleChange} onBlur={handleSubmit} placeholder='Weight' />
            <input id='reps' onChange={handleChange} onBlur={handleSubmit} placeholder='Reps' />
            <input id='sets' onChange={handleChange} onBlur={handleSubmit} placeholder='Sets' />
        </label>
    )

}

const LiftForm = ({setWorkout, workout}) => {

    return (
            <div className='lift-container'>
                <ExerciseInput id={0} setWorkout={setWorkout} workout={workout} />
                <ExerciseInput id={1} setWorkout={setWorkout} workout={workout} />
                <ExerciseInput id={2} setWorkout={setWorkout} workout={workout} />
                <ExerciseInput id={3} setWorkout={setWorkout} workout={workout} />
                <ExerciseInput id={4} setWorkout={setWorkout} workout={workout} />
            </div>
    )
}

export default LiftForm;