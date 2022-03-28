import { Component } from "react";
import ShopContext from "../../store/ShopContext";
import css from "./styles/QuantityButtons.module.css";

class QuantityButtons extends Component {
  static contextType = ShopContext;
  state = { amount: this.props.amount, id: this.props.id } 

  handleAmountChange = async(action, productID) => {
    await this.context.changeCartProductQuantity(action, productID);
    if(action === "increase") this.setState({ amount: this.state.amount + 1 })
    if(action === "decrease") this.setState({ amount: this.state.amount - 1 })
  }

  render() { 
    const { amount, id } = this.state;
    const { isStandard } = this.props;
    return (
      <div className={css.quantity_control}>
        <button 
          className={`
            ${css.quantity_btn} 
            ${isStandard ? "" : css.quantity_btn_mini}
          `} 
          onClick={() => this.handleAmountChange("increase", id)}
        >+</button>

        <p className={isStandard ? css.amount : css.amount_mini}>{amount}</p>

        <button 
          className={`
            ${css.quantity_btn} 
            ${isStandard ? "" : css.quantity_btn_mini}
          `} 
          onClick={() => this.handleAmountChange("decrease", id)}
        >-</button>
      </div>
    );
  }
}
 
export default QuantityButtons;