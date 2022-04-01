import { Component } from "react";
import css from "./styles/List.module.css";
import ShopContext from "../../store/ShopContext";
import { queryFetch } from "../../utils/helpers";
import Card from "./Card";

const productsByCategoryQuery = (categoryTitle) => {
  return (
    `
    {
      category(input: { title: "${categoryTitle}" }) {
        products {
          id
          name
          inStock
          gallery
          description
          category
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
          brand
        }
      }
    }
  `
  )
} 

class List extends Component {
  static contextType = ShopContext;

  state = { products: [], category: localStorage.getItem("currentCategory") || "all" }

  getProductByCategory = async () => {
    const productsData = await queryFetch(productsByCategoryQuery(this.context.currentCat));
    this.setState({ products: productsData.data.category.products }); 
  }

  componentDidMount() {
    this.getProductByCategory();
  }

  componentDidUpdate() {
    if(this.state.category !== this.context.currentCat) {
      this.setState({ category: localStorage.getItem("currentCategory") });
      this.getProductByCategory();
    }
  }

  componentWillUnmount() {
    this.setState({ products: [], category: "" });
  }

  render() {
    return (
      <section className={css.product_list}>
        {this.state.products.map(item => <Card key={item.id} product={item} />)}
      </section>
    );
  }
}

export default List;