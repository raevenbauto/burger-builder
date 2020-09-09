import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(key => {
            return (
                <li key={key}>
                    <span style={{textTransform: 'capitalize'}}>{key}:</span> {props.ingredients[key]}
                </li>
            )
        });

    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total Price: {props.totalPrice.toFixed(2)}</p>
            <p>Continue to checkout?</p>
            <Button btnType={"Danger"} clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType={"Success"} clicked={props.purchaseContinued}>CONTINUE</Button>
        </Fragment>
    );
};

BurgerIngredient.propTypes = {
    ingredients: PropTypes.object.isRequired,
    purchaseCancelled: PropTypes.func.isRequired,
    purchaseContinued: PropTypes.func.isRequired,
    totalPrice: PropTypes.number.isRequired
};

export default OrderSummary;

