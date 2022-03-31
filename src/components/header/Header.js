import { Component } from "react";
import css from "./styles/Header.module.css";
import Nav from "./Nav";
import Logo from "../../assets/a-logo.svg";
import { Link } from "react-router-dom";
import CurrencySwitch from "./CurrencySwitcher";
import NavCart from "./NavCart";
import ShopContext from "../../store/ShopContext";

class Header extends Component {
  static contextType = ShopContext;
  render() { 
    return (
      <header>
        <Nav />

        <Link onClick={() => this.context.changeCurrentCat("all")} to="/">
          <img src={Logo} alt="green shopping bag logo"/>
        </Link>
        <div className={css.nav_panel}>
          <CurrencySwitch />
          <NavCart />
        </div>
      </header>
    );
  }
}
 
export default Header;