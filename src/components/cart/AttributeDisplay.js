import { Component } from "react";
import ShopContext from "../../store/ShopContext";
import AttributeOptions from "../UI/AttributeOptions";

// Non-selectable attributes for CartPage and MiniCart
class AttributeDisplay extends Component {
  static contextType = ShopContext;
  state = { attributes: this.props.attributes, selectedAttributes: this.props.selectedAttributes }
  
  componentDidUpdate() {
    if(this.state.selectedAttributes !== this.context.shoppingCart[this.props.index].selectedAttributes) {
      this.setState({ selectedAttributes: this.context.shoppingCart[this.props.index].selectedAttributes })
    }
  }
  
  render() { 
    return (
      <div>
        {this.state.attributes.map(attr => {
          const isSwatch = attr.type === "swatch";
          let selectedOption = "";

          this.state.selectedAttributes.map(selectedAttr => selectedAttr.name === attr.name ? selectedOption = selectedAttr.value : "")

          return (
            <AttributeOptions
              key={attr.name} 
              isMini={this.props.type === "mini"}
              isSwatch={isSwatch} 
              attr={attr}
              selectedOption={selectedOption} 
              displayOnly={true}
            />
          )
        })}
      </div>
    );
  }
}
 
export default AttributeDisplay;