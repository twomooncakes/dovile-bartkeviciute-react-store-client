import { Component } from "react";
import css from "./styles/PriceDisplay.module.css";
import ShopContext from "../../store/ShopContext";
import { getPrice } from "../../utils/helpers";

class PriceDisplay extends Component {
  static contextType = ShopContext;
  render() { 
    const { currentCurrency } = this.context;
    return (
      <div className={css.price_display}>
        <h4>Price:</h4>
        <h3 className={css.amount}>{currentCurrency.symbol}{getPrice(this.props.prices, currentCurrency)}</h3>
      </div>
    );
  }
}
 
export default PriceDisplay;