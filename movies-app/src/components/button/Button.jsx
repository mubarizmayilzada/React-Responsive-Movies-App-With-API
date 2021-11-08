import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
    return (
        <button 
            className={`btn ${props.className}`} 
            onclick={props.onclick ? () => props.onclick() : null}
        >
            {props.children}
        </button>
    )
};

const OutlineButton = props => {
    return ( 
        <Button
            className={`btn-outline ${props.className}`} 
            onclick={props.onclick ? () => props.onclick() : null}
        >
            {props.children}
        </Button>
    )
};

Button.propTypes = {
    onclick: propTypes.func
};

export default Button;
