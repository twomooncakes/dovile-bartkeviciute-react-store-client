import { Component } from "react";
import css from './styles/NavCart.module.css';
import Cart from "../../assets/ui-icons/cart-dark.svg";
import { Link } from "react-router-dom";

class NavCart extends Component {
  state = {  } 
  render() { 
    return (
      <div className={css.nav_cart}>
        <Link to={"/cart"}>
          <img src={Cart} alt="shopping overlay button" />
        </Link>
      </div>
    );
  }
}
 
export default NavCart;