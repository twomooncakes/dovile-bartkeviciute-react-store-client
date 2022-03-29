import { Component } from "react";
import AttributeOptions from "../UI/AttributeOptions";

class AttributeDisplay extends Component {
  state = { attributes: this.props.attributes, selectedAttributes: this.props.selectedAttributes } 
  render() { 
    return (
      <div>
        {this.state.attributes.map(attr => {
          const isSwatch = attr.type === "swatch";
          let selectedOption = "";
          this.state.selectedAttributes.map(selectedAttr => {
            if(selectedAttr.name === attr.name) {
              selectedOption = selectedAttr.value;
            }
          })
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