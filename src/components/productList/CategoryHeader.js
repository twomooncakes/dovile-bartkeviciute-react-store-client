import { Component } from "react";
import css from "./styles/CategoryHeader.module.css";
import ShopContext from "../../store/ShopContext";

class CategoryHeader extends Component {
  static contextType = ShopContext;
  render() { 
    return (
      <div className={css.cat_header}>
        <h1>{this.context.currentCat}</h1>
      </div>
    );
  }
}
 
export default CategoryHeader;