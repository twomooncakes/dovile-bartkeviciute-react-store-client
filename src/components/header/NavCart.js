import { Component } from "react";
import css from './styles/NavCart.module.css';
import Cart from "../../assets/ui-icons/cart-dark.svg";
import MiniCart from "../cart/MiniCart";

class NavCart extends Component {
  state = { miniCartDisplay: false } 

  toggleMiniCartDisplay = () => {
    this.setState({ miniCartDisplay: !this.state.miniCartDisplay });
  }

  render() { 
    const { miniCartDisplay } = this.state;
    return (
      <div className={css.nav_cart}>
        <span className={css.quantity_bubble}>1</span>
        <img 
          src={Cart} 
          alt="shopping cart overlay button"
          onClick={this.toggleMiniCartDisplay} 
        />
        {miniCartDisplay && <MiniCart />}
      </div>
    );
  }
}
 
export default NavCart;