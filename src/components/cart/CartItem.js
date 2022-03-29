import { Component } from "react";
import ShopContext from "../../store/ShopContext";
import { getPrice, mod } from "../../utils/helpers";
import QuantityButtons from "../UI/QuantityButton";
import ChevronLight from "../../assets/ui-icons/chevron-light.svg";
import css from "./styles/CartItem.module.css";
import { Link } from "react-router-dom";
import AttributeDisplay from "./AttributeDisplay";

/* CartItem styles depend on type prop: "mini" - (for MiniCart) or "standard" - (for CartPage)*/

class CartItem extends Component {
  static contextType = ShopContext;
  state = { currentImageID: 0, quantity: this.props.item.quantity } 

  changeCurrentImageID(galleryArr, step) {
    this.setState({ currentImageID: mod(this.state.currentImageID + step, galleryArr.length) });
  }

  render() { 
    const { currentCurrency } = this.context;
    const { currentImageID, quantity } = this.state;
    const { id, name, prices, brand, attributes, gallery, selectedAttributes } = this.props.item;
    const isStandard = this.props.type === "standard";
    return (
      <div className={`${css.cart_item_container} ${isStandard ? "" : css.cart_item_mini}`}>
        <section className={css.item_info}>
          <div>
            <h2 className={isStandard ? css.brand : css.brand_mini}>{brand}</h2>

            <Link to={`/product/${id}`}>
              <h2 className={isStandard ? css.name : css.name_mini}>{name}</h2>
            </Link>
          </div>

          <h3 className={isStandard ? css.price : css.price_mini}>{getPrice(prices, currentCurrency)}</h3>
          
          <AttributeDisplay attributes={attributes} type={this.props.type} selectedAttributes={selectedAttributes} />
        </section>

        <section className={css.item_controls}>
          <QuantityButtons index={this.props.index} isStandard={isStandard} amount={quantity} id={id}/>

          <div className={isStandard ? css.gallery_container : css.gallery_container_mini}>
            <img 
              className={isStandard ? css.product_image : css.product_image_mini} 
              src={gallery[currentImageID]} 
              alt={name}
            />
            {gallery.length > 1 && <div className={css.gallery_overlay}>
              <img 
                className={css.chevron} 
                src={ChevronLight}
                alt="chevron left for gallery"
                onClick={() => this.changeCurrentImageID(gallery, -1)} 
              />
              <img 
                className={`flip-y ${css.chevron}`} 
                src={ChevronLight} 
                alt="chevron right for gallery"
                onClick={() => this.changeCurrentImageID(gallery, 1)}
              />
            </div>}
          </div>
        </section>
      </div>
    );
  }
}
 
export default CartItem;