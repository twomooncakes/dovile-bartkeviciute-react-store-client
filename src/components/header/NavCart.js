import { Component } from "react";
import css from './styles/NavCart.module.css';
import Cart from "../../assets/ui-icons/cart-dark.svg";

class NavCart extends Component {
  state = {  } 
  render() { 
    return (
      <div className={css.nav_cart}>
        <img src={Cart} alt="shopping overlay button" />
      </div>
    );
  }
}
 
export default NavCart;