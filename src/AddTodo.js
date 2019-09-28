import React, {useState} from 'react';
import PropTypes from 'prop-types';


function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue);

    return {
        bind:{
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

const AddTodo = function({onCreate}) {
    
    const input = useInputValue('')

    function submitHandler(event) {
        event.preventDefault()


        if(input.value().trim()){
            onCreate(input.value())
            input.clear()
        }
    }

    return(
        <form className="add" onSubmit={submitHandler}>
            <input {...input.bind} />
            <button type="submit">Add Todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo