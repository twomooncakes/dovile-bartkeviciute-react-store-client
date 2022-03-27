import { Component } from "react";
import css from "./styles/QuantityButtons.module.css";

class QuantityButtons extends Component {
  state = { amount: this.props.amount || 2 } 

  handleAmountChange = (action) => {
    console.log(action);
    // remove item if zero thru context
    if(action === "increase") this.setState({ amount: this.state.amount + 1 })
    if(action === "decrease") this.setState({ amount: this.state.amount - 1 })
  }

  render() { 
    const { amount } = this.state;
    return (
      <div className={css.quantity_control}>
        <button className={css.quantity_btn} onClick={() => this.handleAmountChange("increase")}>+</button>
        <p className={css.amount}>{amount}</p>
        <button className={css.quantity_btn} onClick={() => this.handleAmountChange("decrease")}>-</button>
      </div>
    );
  }
}
 
export default QuantityButtons;