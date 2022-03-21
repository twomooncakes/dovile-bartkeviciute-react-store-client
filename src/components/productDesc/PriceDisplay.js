import { Component } from "react";
import css from "./styles/PriceDisplay.module.css";
import ShopContext from "../../store/ShopContext";
import { getPrice } from "../../utils/helpers";

class PriceDisplay extends Component {
  constructor(props) {
    super(props)
  }
  static contextType = ShopContext;
  state = {  } 
  render() { 
    console.log(this.context.currentCurrency);
    console.log(this.props);
    return (
      <div className={css.price_display}>
        <h4>Price:</h4>
        <h3 className={css.amount}>{getPrice(this.props.prices, this.context.currentCurrency)}</h3>
      </div>
    );
  }
}
 
export default PriceDisplay;