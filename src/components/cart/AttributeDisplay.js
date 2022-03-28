import { Component } from "react";
import AttributeOptions from "../UI/AttributeOptions";

class AttributeDisplay extends Component {
  state = { attributes: this.props.attributes } 
  render() { 
    return (
      <div>
        {this.state.attributes.map(attr => {
          const isSwatch = attr.type === "swatch";
          return (
            <AttributeOptions
              key={attr.name} 
              isMini={this.props.type === "mini"}
              isSwatch={isSwatch} 
              attr={attr} 
              displayOnly={true}
            />
          )
        })}
      </div>
    );
  }
}
 
export default AttributeDisplay;