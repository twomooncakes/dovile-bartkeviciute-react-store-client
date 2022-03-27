import { Component } from "react";
import css from "./styles/MiniCart.module.css"
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import ShopContext from "../../store/ShopContext";
import CartItem from "./CartItem";

class MiniCart extends Component {
  static contextType = ShopContext;
  state = {  } 
  render() { 
    const { shoppingCart, currentCurrency } = this.context;
    let itemCount = 0;
    let totalPrice = 0;
    return (
      <div className={css.mini_cart_overlay}>
        <div className={css.mini_cart_header}>
          <h4>My Bag, 
            <span className="regularFontWeight"> {itemCount} item{itemCount === 1 ? "" : "s"}</span>
          </h4>
        </div>
        
        <div className={css.mini_cart_items}>
          {shoppingCart.map(item => {
            return (
              <CartItem type="mini" key={item.name} item={item} />
            )
          })}
        </div>

        <div className={css.mini_cart_footer}>
          <h4>Total</h4>
          <h4>{currentCurrency.symbol + totalPrice}</h4>
        </div>
        <div className={css.mini_cart_btns}>
          <Link to={"/cart"}>
            <Button>View Bag</Button>
          </Link>
          <Button>Check Out</Button>
        </div>
      </div>
    );
  }
}
 
export default MiniCart;