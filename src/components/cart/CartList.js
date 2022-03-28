import { Component } from "react";
import css from "./styles/CartList.module.css"
import CartItem from "./CartItem";
import ShopContext from "../../store/ShopContext";

class CartList extends Component {
  static contextType = ShopContext;
  state = {  } 
  render() { 
    const { shoppingCart } = this.context;
    return (
      <div className={css.cart_list}>
        {shoppingCart.length !== 0 ? 

        shoppingCart.map((item, idx) => {
          return (
            <CartItem type="standard" key={`${item.name}-${idx}`} index={idx} item={item} />
          )
        })
        // unfinished styling
        : <p>no cart items yet.</p>}
      </div>
    );
  }
}
 
export default CartList;