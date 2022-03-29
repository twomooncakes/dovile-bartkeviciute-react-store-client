import { Component } from "react";
import ShopContext from "../../store/ShopContext";
import RoundButton from "../UI/RoundButton";
import Cart from "../../assets/ui-icons/cart-light.svg";
import css from "./styles/Card.module.css";
import { Link } from "react-router-dom";
import { getPrice } from "../../utils/helpers";

class Card extends Component {
  static contextType = ShopContext;

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() { 
    const { brand, name, id, prices, gallery, inStock } = this.props.product;
    const { currentCurrency } = this.context;
    return (
      <div className={`${css.product_card} ${inStock ? "" : css.not_in_stock}`}>
        <div className={css.product_image}>

          {!inStock && <div className={css.stock_text_wrapper}><h3 className={css.stock_text}>out of stock</h3></div> }

          <img className={css.main_image} src={gallery[0]} alt={name} />

          <div className={css.cart_btn_wrapper}>
            <Link onClick={() => this.context.changeCurrentProductID(id)} to={`/product/${id}`}>
              <RoundButton><img src={Cart} alt="cart symbol" /></RoundButton>
            </Link>
          </div>
          
        </div> 
        
        <div className={css.product_info}>
          <h3>{`${brand} ${name}`}</h3>
          <h3 className={css.product_price}>
            {getPrice(prices, currentCurrency)}
          </h3>
        </div>
      </div>
    );
  }
}
 
export default Card;