import { Component } from "react";
import ShopContext from "../../store/ShopContext";
import RoundButton from "../UI/RoundButton";
import Cart from "../../assets/ui-icons/cart-light.svg";
import css from "./styles/Card.module.css";
import { Link } from "react-router-dom";
import { generateCartItem, getPrice } from "../../utils/helpers";
import AttributeSelector from "../productDesc/AttributeSelector";

class Card extends Component {
  static contextType = ShopContext;

  state = { 
    product: this.props.product, 
    selectedAttributes: this.props.product.attributes.map(attr => {
      return ({
        name: attr.name,
        value: null
      })
    }), 
    addToCartView: false,
    selectAttributeView: false,
  }

  toggleAddToCartView = (bool) => {
    this.setState({ addToCartView: bool});
    if(bool === false) {
      // when AddToCartView disappears, remove SelectAttributeView and reset SelectedAttributes
      this.toggleSelectAttributeView(false);
      this.resetSelectedAttributes();
    }
  }

  toggleSelectAttributeView = (bool) => {
    this.setState({ selectAttributeView: bool })
  }

  resetSelectedAttributes = () => {
    this.setState({ 
      selectedAttributes: this.state.selectedAttributes.map(attr => { return  { ...attr, value: null } })
    })
  }

  handleAttributeSelection = (nameOfAttr, valueOfAttr) => {
    this.setState({
      selectedAttributes: this.state.selectedAttributes.map(attr => attr.name === nameOfAttr ? { ...attr, value: valueOfAttr} : attr )
    })
  }

  handleAddToCart = () => {
    let productToAdd = generateCartItem(this.state.product, this.state.selectedAttributes);

    // check if all attributes have selected values
    if(this.state.selectedAttributes.every((item) => item.value !== null)) {
      this.context.addToCart(productToAdd);
      return;
    }

    this.toggleSelectAttributeView(true);
    this.context.showNotification("warning", "Please select product attributes first");
  }

  render() { 
    const { brand, name, id, prices, gallery, inStock, attributes } = this.state.product;
    const { addToCartView, selectAttributeView } = this.state;
    const { currentCurrency } = this.context;
    return (
      <div 
        className={css.product_card}
        onMouseOver={() => this.toggleAddToCartView(true)} 
        onMouseLeave={() => this.toggleAddToCartView(false)}
      >
        {!inStock && 
        <div className={css.stock_text_wrapper}>
          <h3 className={css.stock_text}>out of stock</h3>
        </div>}

        {selectAttributeView &&
          <AttributeSelector 
            attributes={attributes} 
            selectionHandler={this.handleAttributeSelection}
            type="mini"
            overlayStyle={true} 
          />}

        <div className={css.product_image}>
          <img className={css.main_image} src={gallery[0]} alt={name} />

          {(addToCartView && inStock) && 
          <div className={css.cart_btn_wrapper}>
            <RoundButton clickFunc={() => this.handleAddToCart()}>
              <img src={Cart} alt="cart symbol" />
            </RoundButton>
          </div>}
        </div>

        <Link onClick={() => this.context.changeCurrentProductID(id)} to={`/product/${id}`}>
          <div 
            className={`
              ${css.product_info} 
              ${!inStock ? css.product_info_notInStock : ""}
            `}
          >
            <h3>{`${brand} ${name}`}</h3>
            <h3 className={css.product_price}>
              {currentCurrency.symbol}{getPrice(prices, currentCurrency)}
            </h3>
          </div>
        </Link>

      </div>
    );
  }
}

export default Card;