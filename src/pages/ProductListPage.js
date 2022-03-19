import { Component } from "react";
import CategoryHeader from "../components/productList/CategoryHeader";
import List from "../components/productList/List";


class ProductListPage extends Component {
  state = {} 

  render() { 
    return (
      <main>
        <CategoryHeader />
        <List />
      </main>
    );
  }
}
 
export default ProductListPage;