import React from 'react';
import burgerlogo from '../../../src/assets/images/burger-logo.png'
import classes from './Logo.module.css'


const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={burgerlogo} alt="My Burger"/>
        </div>
    )
}

export default Logo;
