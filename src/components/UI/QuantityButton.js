import { Component } from "react";
import css from "./styles/QuantityButtons.module.css";

class QuantityButtons extends Component {
  state = {  } 
  render() { 
    // const { amount } = this.props;
    return (
      <div className={css.quantity_control}>
        <button className={css.quantity_btn}>+</button>
        <p className={css.amount}>2</p>
        <button className={css.quantity_btn}>-</button>
      </div>
    );
  }
}
 
export default QuantityButtons;