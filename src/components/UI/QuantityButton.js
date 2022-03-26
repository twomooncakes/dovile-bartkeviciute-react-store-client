import { Component } from "react";
import css from "./styles/QuantityButtons.module.css";

class QuantityButtons extends Component {
  state = { amount: this.props.amount || 2 } 

  handleAmountChange = (action) => {

  }

  render() { 
    const { amount } = this.state;
    return (
      <div className={css.quantity_control}>
        <button className={css.quantity_btn} onClick={this.handleAmountChange("increase")}>+</button>
        <p className={css.amount}>{amount}</p>
        <button className={css.quantity_btn} onClick={this.handleAmountChange("decrease")}>-</button>
      </div>
    );
  }
}
 
export default QuantityButtons;