import { Component } from "react";
import AttributeOptions from "../UI/AttributeOptions";
import css from "./styles/AttributeSelector.module.css";

class AttributeSelector extends Component {
  state = { attributes: this.props.attributes }
  
  render() { 
    return (
      <div className={css.attribute_selector}>
        {this.state.attributes.map(attr => {
          const isSwatch = attr.type === "swatch";
          return (
            <div className={css.attribute} key={attr.id}>
              <div className={css.attribute_name}>
                <h4>{attr.name}:</h4>
              </div>
              <AttributeOptions 
                isSwatch={isSwatch} 
                attr={attr} 
                displayOnly={false} 
                selectionHandler={this.props.selectionHandler}
              />
            </div>
          )
        })}
      </div>
    );
  }
}
 
export default AttributeSelector;