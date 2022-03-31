import { Component } from "react";
import css from "./styles/MiniCart.module.css"
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import ShopContext from "../../store/ShopContext";
import CartItem from "./CartItem";
import { getTotalPrice, getTotalQuantity } from "../../utils/helpers";

class MiniCart extends Component {
  static contextType = ShopContext;
  render() { 
    const { shoppingCart, currentCurrency } = this.context;
    let itemCount = getTotalQuantity(shoppingCart);
    return (
      <div className={css.mini_cart_overlay}>
        <div className={css.mini_cart_header}>
          <h4>My Bag, 
            <span className="regularFontWeight"> {itemCount} item{itemCount === 1 ? "" : "s"}</span>
          </h4>
        </div>
        
        <div className={css.mini_cart_items}>
          {shoppingCart.length !== 0 ? 
          shoppingCart.map((item,idx) => {
            return (
              <CartItem type="mini" key={`${item.name}-${idx}`} index={idx} item={item} />
            )
          })
          : <p className="message">Your cart is empty.</p>}
        </div>

        <div className={css.mini_cart_footer}>
          <h4>Total</h4>
          <h4>{`${currentCurrency.symbol}${getTotalPrice(shoppingCart, currentCurrency)}`}</h4>
        </div>
        <div className={css.mini_cart_btns}>
          <Link to={"/cart"} onClick={() => this.props.toggleMiniCartDisplay()}>
            <Button type="outline">View Bag</Button>
          </Link>
          <Button type="primary">Check Out</Button>
        </div>
      </div>
    );
  }
}
 
export default MiniCart;