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
            {
                controls.map((ctrl) => {
                    return <BuildControl key={ctrl.label} label={ctrl.label}
                                         addIngredient={() => props.addIngredient(ctrl.type)}
                                         removeIngredient={() => props.removeIngredient(ctrl.type)}
                                         disabled={props.disabledInfo[ctrl.type]}/>
                })
            }
        </div>
    );
};

BuildControls.propTypes = {
    addIngredient: PropTypes.func.isRequired,
    removeIngredient: PropTypes.func.isRequired,
    disabledInfo: PropTypes.object.isRequired
};

export default BuildControls;


