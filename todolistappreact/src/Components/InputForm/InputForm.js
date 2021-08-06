const InputForm = (props) => {

    return (
        <input onChange={props.change} type={props.typeValue} placeholder="add a task" name='task' />
    );
}

export default InputForm