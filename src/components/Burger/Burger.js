import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
const burger = (props) => {

    let ingredients = Object.keys(props.ingredients).map(key => {
        return [...Array(props.ingredients[key])].map((_, i) => (
            <BurgerIngredient type={key} key={`${key}_${i}`} />
        ));
    });

    const ingredientsCount = ingredients.flat().length;

    if (ingredientsCount === 0){
        ingredients = <p>Please start adding ingredients.</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;
