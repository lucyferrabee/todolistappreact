import {useEffect, useState} from "react";

const TasksList = () => {
    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        let response = await fetch('http://127.0.0.1:3000/tasks')
        let tasks = await response.json();
        setTasks(tasks);
    }

    useEffect(() => {
        if (tasks.length === 0) {
            getTasks()
        }
    })

    return (
        <ul>
            {tasks.map((tasks, index) => {
                return (<li key={index}>{tasks.name}</li>);
            })}
        </ul>
    )
}

export default TasksList;