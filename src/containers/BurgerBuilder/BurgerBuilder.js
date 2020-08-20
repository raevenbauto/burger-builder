import React, {Component, Fragment} from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.5,
    bacon: 0.7
};

class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    };

    addIngredient = (type) => {
        this.setState(prevState => {
            return {
                ingredients: {
                    ...this.state.ingredients,
                    [type]: prevState.ingredients[type] + 1
                },
                totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type]
            }
        });
    };

    removeIngredient = (type) => {

        if (this.state.ingredients[type] === 0)
            return;


        this.setState(prevState => {
            return {
                ingredients: {
                    ...this.state.ingredients,
                    [type]: prevState.ingredients[type] - 1
                },
                totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type]
            }
        });
    };



    render(){
        const disabledInfo = {
          ...this.state.ingredients
        };

        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return(
            <Fragment>
                <div>
                    <Burger ingredients={this.state.ingredients}></Burger>
                    <BuildControls addIngredient={this.addIngredient}
                                   removeIngredient={this.removeIngredient}
                                   disabledInfo={disabledInfo}/>
                </div>
            </Fragment>
        );
    }
}

export default BurgerBuilder;
