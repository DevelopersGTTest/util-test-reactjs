import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    //hooks
    const [ counter, setCounter ] = useState( value );

    //handlers
    const handlerIncrase = () => {
        setCounter( counter + 1 );
    }

    const handleReset = () => {
        setCounter( 0 )
    }

    const handleSubstraction = () => {
        setCounter( counter - 1 )
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handlerIncrase } > Incrase value </button>
            <button onClick={ handleReset } > Reset value </button>
            <button onClick={  handleSubstraction  } > Decrement value </button>

        </>
    );
}

CounterApp.propType = {
    value: PropTypes.number.isRequired
}


export default CounterApp;