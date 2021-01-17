import React from 'react';
import PropTypes from 'prop-types';

const FooApp = ({ gretting }) => {

    return (
        <>
            <h1>it's works: { gretting } </h1>
            <p>foo, bar</p>   
        </>
    );
}

FooApp.propType = {
    gretting: PropTypes.string.isRequired
}

export default FooApp;