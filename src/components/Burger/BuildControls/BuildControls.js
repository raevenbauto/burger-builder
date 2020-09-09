import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from "./BuildControl/BuildControl";
import PropTypes from "prop-types";

const controls = [
    {label: "Salad", type: "salad"},
    {label: "Bacon", type: "bacon"},
    {label: "Cheese", type: "cheese"},
    {label: "Meat", type: "meat"}
];


const BuildControls = (props) => {
    return (
        <div className={classes.BuildControl}>
            <p>Current Price: <strong>${props.totalPrice.toFixed(2)}</strong></p>
            {
                controls.map((ctrl) => {
                    return <BuildControl key={ctrl.label} label={ctrl.label}
                                         addIngredient={() => props.addIngredient(ctrl.type)}
                                         removeIngredient={() => props.removeIngredient(ctrl.type)}
                                         disabled={props.disabledInfo[ctrl.type]}
                                         />
                })
            }

            <button className={classes.OrderButton}
                    disabled={!props.allowPurchase}
                    onClick={props.isOrdering}>
                ORDER NOW
            </button>
        </div>
    );
};

BuildControls.propTypes = {
    addIngredient: PropTypes.func.isRequired,
    removeIngredient: PropTypes.func.isRequired,
    disabledInfo: PropTypes.object.isRequired,
    totalPrice: PropTypes.number.isRequired,
    allowPurchase: PropTypes.bool.isRequired,
    isOrdering: PropTypes.bool.isRequired
};

export default BuildControls;


