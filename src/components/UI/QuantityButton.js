import { Component } from "react";
import ShopContext from "../../store/ShopContext";
import css from "./styles/QuantityButtons.module.css";

class QuantityButtons extends Component {
  static contextType = ShopContext;
  state = { amount: this.props.amount || 2, id: this.props.id } 

  handleAmountChange = (action, productID) => {
    console.log(action);
    // remove item if zero thru context
    this.context.changeCartProductQuantity(action, productID);
    // if(action === "increase") this.setState({ amount: this.state.amount + 1 })
    // if(action === "decrease") this.setState({ amount: this.state.amount - 1 })
  }

  render() { 
    const { amount, id } = this.state;
    return (
      <div className={css.quantity_control}>
        <button className={css.quantity_btn} onClick={() => this.handleAmountChange("increase", id)}>+</button>
        <p className={css.amount}>{amount}</p>
        <button className={css.quantity_btn} onClick={() => this.handleAmountChange("decrease", id)}>-</button>
      </div>
    );
  }
}
 
export default QuantityButtons;