import { Component } from "react";
import css from "./styles/ProductDescPage.module.css";
import ShopContext from "../store/ShopContext";
import Gallery from "../components/productDesc/Gallery";
import ProductDesc from "../components/productDesc/ProductDesc";
import { queryFetch } from "../utils/helpers";

const productByIDQuery = (productID) => {
  return `
  {
    product(id: "${productID}") {
      id
      name
      inStock
      gallery
      description
      category
      brand
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
    }
  }
  `;
}

class ProductDescPage extends Component {
  static contextType = ShopContext;

  state = { product: {} }

  async componentDidMount() {
    const productData = await queryFetch(productByIDQuery(this.context.currentProductID));
    this.setState({ product: productData.data.product })
    this.context.changeCurrentCat(this.state.product.category);
  }

  componentWillUnmount() {
    this.setState({ product: {} });
  }
  
  render() { 
    const { name, id, gallery } = this.state.product;
    console.log(this.state.product.prices);
    return (
      <main className={css.desc_page_container}>
        {
        (Object.keys(this.state.product).length !== 0) 
        && 
        <>
          <Gallery id={id} gallery={gallery} name={name}/>
          <ProductDesc product={this.state.product} />
        </>
        }
        
      </main>
    );
  }
}
 
export default ProductDescPage;