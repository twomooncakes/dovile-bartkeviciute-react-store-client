import { Component } from "react";
import CartList from "../components/cart/CartList";

class CartPage extends Component {
  state = {  } 
  render() { 
    return (
      <main>
        <div>
          <h2 className="bold-title-heading">Cart</h2>
        </div>
        <CartList />
      </main>
    );
  }
}
 
export default CartPage;