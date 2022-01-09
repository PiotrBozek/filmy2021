import React, { useState } from 'react';

import './Input.css';

const Input = (props) => {
    const [value, setValue] = useState('');

    // console.log(props)

    const handleChange = (event) => {
        event.preventDefault();
        setValue(event.target.value)
        // console.log(value);
        // this.props.handleInput(value);

        console.log(value);
    }

    return (

        <div>
            <input
                type="text"
                placeholder='szukaj filmu'
                // value={this.state.value}
                onChange={handleChange}
            />
            <button
                type="button"
                onClick={handleChange}
            >
                szukaj
            </button>
        </div>
    );
}



export default Input;
