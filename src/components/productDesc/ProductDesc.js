import React, { Component } from "react";
import css from "./styles/ProductDesc.module.css";
import Button from "../UI/Button";
import AttributeSelector from "./AttributeSelector";
import PriceDisplay from "./PriceDisplay";
import ShopContext from "../../store/ShopContext";

class ProductDesc extends Component {
  static contextType = ShopContext;

  constructor(props) {
    super(props)
    this.state = { 
      product: {}, 
      selectedAttributes: this.props.product.attributes.map(attr => {
        return ({
          name: attr.name,
          value: null
        })
      }) 
    }
  }

  componentDidMount() {
    this.setState({ product: this.props.product });
  }

  componentWillUnmount() {
    this.setState({ product: {} });
  }

  handleAttributeSelection = (nameOfAttr, valueOfAttr) => {
    this.setState({
      selectedAttributes: this.state.selectedAttributes.map(attr => attr.name === nameOfAttr ? { ...attr, value: valueOfAttr} : attr )
    })
  }

  generateCartItemID = (baseID, selectedAttrArr) => {
    let id = baseID;
    selectedAttrArr.map(attr => id += `-${attr.value}`);
    return id.toLowerCase();
  }

  handleAddToCart = () => {
    let product = this.state.product;
    let productToAdd = {
      id: this.generateCartItemID(product.id, this.state.selectedAttributes),
      name: product.name,
      brand: product.brand,
      prices: product.prices,
      attributes: product.attributes,
      selectedAttributes: this.state.selectedAttributes,
      gallery: product.gallery,
      quantity: 1,
    }

    // check if all attributes have selected values
    if(this.state.selectedAttributes.every((item) => item.value !== null)) {
      console.log("will add this");
      console.log(productToAdd);
      this.context.addToCart(productToAdd);
      return;
    }
    
    this.context.showNotification("warning", "Please select product attributes first");
    console.log("please select attributes first");
  }

  render() { 
    const { name, brand, attributes, prices, description } = this.state.product;
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
          >add to cart</Button>
        </div>
        
        <div 
          className={css.description}
          dangerouslySetInnerHTML={{
            __html: description
          }}
        >
        </div>

      </section>
    );
  }
}
 
export default ProductDesc;