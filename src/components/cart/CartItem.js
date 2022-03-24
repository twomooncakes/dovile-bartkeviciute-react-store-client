import { Component } from "react";
import css from "./styles/CartItem.module.css";

class CartItem extends Component {
  state = { currentImageID: 0 } 
  render() { 
    const { currentImageID } = this.state;
    const { name, brand, gallery } = this.props.item;
    return (
      <div className={css.cart_item_container}>
        <section className={css.item_info}>
          <h2>{brand}</h2>
          <h2>{name}</h2>
          <h3>$50.00</h3>
        </section>
        <section className={css.item_controls}>
          <div className={css.quantity_controls}>
            qnt btns
          </div>
          <div className={css.mini_gallery_container}>
            <img src={gallery[currentImageID]} />
          </div>
        </section>
      </div>
    );
  }
}
 
export default CartItem;