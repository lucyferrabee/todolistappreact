import {useEffect, useState} from "react";

import Button from "../Button/Button";
import InputForm from "../InputForm/InputForm";


const AddTask = () => {

    const [value, setValue] = useState('')
    const change = event => {
        setValue(event.target.value)
    }

    const addNewTask = async () => {
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name:value, completed:false})
            }
        const rawResponse = await fetch('http://127.0.0.1:3000/tasks', requestOptions)
        const response = await rawResponse.json()
        console.log(response);
    }

    return (
        <div className='form-container'>

            <h1>Add a task to the list</h1>
            <InputForm typeValue = "text" change = {change} />
            <Button click={addNewTask} buttonValue="submit"/>

        </div>
    )
}

export default AddTask