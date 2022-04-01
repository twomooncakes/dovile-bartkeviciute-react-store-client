import { Component } from "react";
import ShopContext from "../../store/ShopContext";
import css from "./styles/QuantityButtons.module.css";

class QuantityButtons extends Component {
  static contextType = ShopContext;
  state = { amount: this.props.amount, id: this.props.id, index: this.props.index } 

  handleAmountChange = async(action, productID) => {
    await this.context.changeCartProductQuantity(action, productID);
    if(action === "increase") this.setState({ amount: this.state.amount + 1 })
    if(action === "decrease") this.setState({ amount: this.state.amount - 1 })
  }

  componentDidUpdate() {
    if(this.context.shoppingCart[this.state.index].quantity !== this.state.amount) {
      this.setState({ amount: this.context.shoppingCart[this.state.index].quantity, id: this.context.shoppingCart[this.state.index].id })
    }
    if(this.props.id !== this.state.id) {
      this.setState({ id: this.props.id })
    }
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
          onClick={amount === 1 ? () => this.context.removeCartItem(id) : () => this.handleAmountChange("decrease", id)}
        >-</button>
      </div>
    );
  }
}
 
export default QuantityButtons;