import { Component } from "react";
import css from "./styles/CartPage.module.css";
import CartList from "../components/cart/CartList";

class CartPage extends Component {
  render() { 
    return (
      <main>
        <div>
          <h2 className={css.cart_heading}>Cart</h2>
        </div>
        <CartList />
      </main>
    );
  }
}
 
export default CartPage;