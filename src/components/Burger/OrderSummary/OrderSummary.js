import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(key => {
            return (
                <li key={key}>
                    <span style={{textTransform: 'capitalize'}}>{key}:</span> {props.ingredients[key]}
                </li>
            )
        })

    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout.</p>
        </Fragment>
    );
};

BurgerIngredient.propTypes = {
    ingredients: PropTypes.object.isRequired
};

export default OrderSummary;

