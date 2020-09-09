import React, {Component, Fragment} from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
        totalPrice: 4,
        allowPurchase: false,
        isOrdering: false
    };

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients).map(key => {
            return ingredients[key];
        }).reduce((sum, el) => {
            return el + sum;
        }, 0);
        console.log(sum)
        this.setState({allowPurchase: sum > 0});
    }

    addIngredient = (type) => {
        this.setState(prevState =>
        {
            const ingredients = {
                ...this.state.ingredients,
                [type]: prevState.ingredients[type] + 1
            };
            this.updatePurchaseState(ingredients);
            return {
                ingredients,
                totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type]
            }
        });
    };

    removeIngredient = (type) => {
        if (this.state.ingredients[type] !== 0){
            this.setState(prevState => {
                const ingredients = {
                    ...this.state.ingredients,
                    [type]: prevState.ingredients[type] - 1
                };
                this.updatePurchaseState(ingredients);

                return {
                    ingredients,
                    totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type]
                }
            });
        }
        this.updatePurchaseState(this.state.ingredients);
    };

    purchaseHandler = () => {
        this.setState({isOrdering: true})
    }

    purchaseCancelHandler = () => {
        this.setState({isOrdering: false});
    };

    purchaseContinueHandler = () => {
        alert("You continue");
    }

    render(){
        const disabledInfo = {
          ...this.state.ingredients
        };

        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return(
            <Fragment>
                <Modal show={this.state.isOrdering} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary   ingredients={this.state.ingredients}
                                    purchaseCancelled={this.purchaseCancelHandler}
                                    purchaseContinued={this.purchaseContinueHandler}
                                    totalPrice={this.state.totalPrice}/>
                </Modal>
                <div>
                    <Burger ingredients={this.state.ingredients}></Burger>
                    <BuildControls addIngredient={this.addIngredient}
                                   removeIngredient={this.removeIngredient}
                                   disabledInfo={disabledInfo}
                                   totalPrice={this.state.totalPrice}
                                   allowPurchase={this.state.allowPurchase}
                                   isOrdering={this.purchaseHandler} />
                </div>
            </Fragment>
        );
    }
}

export default BurgerBuilder;
