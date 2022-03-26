import { Component } from "react";
import ShopContext from "../../store/ShopContext";
import { getPrice } from "../../utils/helpers";
import QuantityButtons from "../UI/QuantityButton";
import ChevronLight from "../../assets/ui-icons/chevron-light.svg";
import css from "./styles/CartItem.module.css";
import { Link } from "react-router-dom";

/* CartItem flavors via type prop: "mini" or "standard"  */

class CartItem extends Component {
  static contextType = ShopContext;
  state = { currentImageID: 0, quantity: 0 } 

  changeCurrentImageID(galleryArr) {
    // recheck
    this.setState({ currentImageID: this.state.currentImageID < galleryArr.length-1 ? this.state.currentImageID + 1 : 0 });
  }

  render() { 
    const { currentCurrency } = this.context;
    const { currentImageID } = this.state;
    const { id, name, brand, gallery } = this.props.item;
    return (
      <div className={css.cart_item_container}>
        <section className={css.item_info}>
          <h2 className="boldFontWeight">{brand}</h2>
          <Link to={`/product/${id}`}>
            <h2>{name}</h2>
          </Link>
          <h3>$50.00</h3>
          {/* <h3>{getPrice(prices, currentCurrency)}</h3> */}
        </section>
        <section className={css.item_controls}>
          <div className={css.quantity_controls}>
            
          </div>
          <QuantityButtons />
          <div className={css.mini_gallery_container}>
            <img className={css.product_image} src={gallery[currentImageID]} />
            <div className={css.mini_gallery_overlay}>
              <img 
                className={css.chevron} 
                src={ChevronLight}
                onClick={() => this.changeCurrentImageID(gallery)} 
              />
              <img 
                className={`flip-y ${css.chevron}`} 
                src={ChevronLight} 
                onClick={() => this.changeCurrentImageID(gallery)}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
 
export default CartItem;