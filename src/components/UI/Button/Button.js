import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css'

const Button = props => {
    return (
        <button className={[classes.Button, classes[props.btnType]].join(' ')} onClick={props.clicked}>
            {props.children}
        </button>
    );
};

Button.propTypes = {
    clicked: PropTypes.func,
    btnType: PropTypes.string.isRequired
};

export default Button;
