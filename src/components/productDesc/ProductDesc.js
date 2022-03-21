import { Component } from "react";
import css from "./styles/ProductDesc.module.css";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import AttributeSelector from "./AttributeSelector";
import PriceDisplay from "./PriceDisplay";

class ProductDesc extends Component {
  constructor(props) {
    super(props)
    this.state = { product: {} }
  }

  componentDidMount() {
    this.setState({ product: this.props.product });
  }

  componentWillUnmount() {
    this.setState({ product: {} });
  }

  render() { 
    const { name, brand, attributes, prices, description } = this.state.product;
    console.log(prices);
    return (
      <section className={css.product_desc}>
        <div className={css.product_title}>
          <h2 className={css.brand}>{brand}</h2>
          <h2>{name}</h2>
        </div>

        {attributes && <AttributeSelector attributes={attributes} />}

        {prices && <PriceDisplay prices={prices} /> }

        <Link to="/cart">
          <Button bg={"accentColorBG"} txtColor={"lightColorTxt"}>add to cart</Button>
        </Link>
        
        <div className={css.description}>
          <p>{description}</p>
        </div>
      </section>
    );
  }
}
 
export default ProductDesc;