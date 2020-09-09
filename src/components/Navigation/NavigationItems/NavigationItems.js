import React from "react";
import classes from './NavigationItems.module.css'

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <li className={classes.NavigationItem}>
                <a  href="/"
                    className={classes.active}>Burger Builder</a>
            </li>

            <li className={classes.NavigationItem}>
                <a  href="/"
                    className={props.active ? classes.active : null}>Checkout</a>
            </li>
        </ul>
    )
};

export default NavigationItems
