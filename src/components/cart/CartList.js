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
        {shoppingCart.products.map(item => {
          return (
            <CartItem key={item.name} item={item} />
          )
        })}
      </div>
    );
  }
}
 
export default CartList;