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
        <img 
          src={Cart} 
          alt="shopping overlay button"
          onClick={this.toggleMiniCartDisplay} 
        />
        {miniCartDisplay && <MiniCart />}
      </div>
    );
  }
}
 
export default NavCart;