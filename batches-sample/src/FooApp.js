import React from 'react';
import PropTypes from 'prop-types';

const FooApp = ({ greeting, query }) => {

    return (
        <>
            <h1>it's works: { greeting } </h1>
            <p>foo, bar</p>   
        </>
    );
}

FooApp.propType = { // [deprecated] -- MyComponent.propTypes x
    greeting: PropTypes.string.isRequired
}

FooApp.defaultProps = { 
    query: 'foo'
}

export default FooApp;