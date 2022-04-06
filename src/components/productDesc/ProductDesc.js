import React, { Component } from "react";
import css from "./styles/ProductDesc.module.css";
import Button from "../UI/Button";
import AttributeSelector from "./AttributeSelector";
import PriceDisplay from "./PriceDisplay";
import ShopContext from "../../store/ShopContext";
import { generateCartItem } from "../../utils/helpers";
import DOMPurify from 'dompurify';

class ProductDesc extends Component {
  static contextType = ShopContext;
  state = { 
    product: {}, 
    selectedAttributes: this.props.product.attributes.map(attr => {
      return ({
        name: attr.name,
        value: null
      })
    }) 
  }

  componentDidMount() {
    this.setState({ product: this.props.product });
  }

  componentDidUpdate() {
    if(this.props.product !== this.state.product) {
      this.setState({ 
        product: this.props.product, 
        selectedAttributes: this.props.product.attributes.map(attr => {
          return ({
            name: attr.name,
            value: null
          })
        })  
      })
    }
  }

  componentWillUnmount() {
    this.setState({ product: {} });
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
      console.log("will add this");
      console.log(productToAdd);
      this.context.addToCart(productToAdd);
      return;
    }
    
    this.context.showNotification("warning", "Please select product attributes first");
  }

  render() { 
    const { name, brand, attributes, prices, description, inStock } = this.state.product;
    return (
      <section className={css.product_desc}>
        <div className={css.product_title}>
          <h2 className={css.brand}>{brand}</h2>
          <h2>{name}</h2>
        </div>

        {attributes && <AttributeSelector attributes={attributes} selectionHandler={this.handleAttributeSelection} />}

        {prices && <PriceDisplay prices={prices} /> }

        <div className={css.cart_btn_wrapper}>
          <Button 
            type="primary"
            clickFunc={() => this.handleAddToCart()}
            styling={!inStock ? css.disabled_btn : ""}
            disabled={!inStock}
          >{inStock ? "add to cart" : "sold out"}</Button>
        </div>
        
        <div 
          className={css.description}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(description)
          }}
        >
        </div>

      </section>
    );
  }
}
 
export default ProductDesc;