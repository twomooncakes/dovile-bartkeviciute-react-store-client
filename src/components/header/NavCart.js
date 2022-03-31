import { Component } from "react";
import css from './styles/NavCart.module.css';
import Cart from "../../assets/ui-icons/cart-dark.svg";
import MiniCart from "../cart/MiniCart";
import { getTotalQuantity } from "../../utils/helpers";
import ShopContext from "../../store/ShopContext";

class NavCart extends Component {
  static contextType = ShopContext;
  state = { miniCartDisplay: false } 

  toggleMiniCartDisplay = () => {
    this.setState({ miniCartDisplay: !this.state.miniCartDisplay });
  }

  render() { 
    const { miniCartDisplay } = this.state;
    return (
      <div className={css.nav_cart}>
        <div 
          className={miniCartDisplay ? "app-overlay dark" : ""}
          onClick={this.toggleMiniCartDisplay}
        ></div>
        <span className={css.quantity_bubble} onClick={this.toggleMiniCartDisplay}>{getTotalQuantity(this.context.shoppingCart)}</span>
        <img 
          src={Cart} 
          alt="shopping cart overlay button"
          onClick={this.toggleMiniCartDisplay} 
        />
        {miniCartDisplay && <MiniCart toggleMiniCartDisplay={this.toggleMiniCartDisplay} />}
      </div>
    );
  }
}
 
export default NavCart;