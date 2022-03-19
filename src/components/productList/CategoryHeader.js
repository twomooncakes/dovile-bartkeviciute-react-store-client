import { Component } from "react";
import ShopContext from "../../store/ShopContext";

class CategoryHeader extends Component {
  static contextType = ShopContext;
  render() { 
    return (
      <div className="cat-header">
        <h1>{this.context.currentCat}</h1>
      </div>
    );
  }
}
 
export default CategoryHeader;