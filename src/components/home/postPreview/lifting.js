import React from "react";
import './lifting.css'
const TableHead = () => {
    return (
        <tr>
            <th>Exercise</th>
            <th>Reps</th>
            <th>Sets</th>
            <th>Weight</th>
        </tr>
    )
}
const DataRow = ({exercise}) => {
return (
    <tr>
        <td>{exercise.name}</td>
        <td>{exercise.reps}</td>
        <td>{exercise.sets}</td>
        <td>{exercise.weight}</td>
    </tr>
    )
}
// have to pass workout in here but using placeholder data
const Lift = ({body}) => {
    const workout = {
        name: "Pull Day Variation One",
        exercises: [
            {
                name: "Squat",
                reps: 5,
                sets: 5,
                weight: 240
            },
            {
                name: "RDL",
                reps: 8,
                sets: 3,
                weight: 185
            },
            {
                name: "Leg Press",
                reps: 8,
                sets: 3,
                weight: 270
            },
        ]
    }
    return (
        <>
            <div className='lift-container'>
                <table>
                    <TableHead />
                    {workout.exercises.map(exercise => <DataRow exercise={exercise} />)}
                </table>
            </div>
            <h1>{workout.name}</h1>
            <p>{body}</p>
        </>
    )
}
export default Lift