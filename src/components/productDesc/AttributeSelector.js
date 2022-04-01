import { Component } from "react";
import AttributeOptions from "../UI/AttributeOptions";
import css from "./styles/AttributeSelector.module.css";

class AttributeSelector extends Component {
  state = { attributes: this.props.attributes }

  componentDidUpdate() {
    if(this.props.attributes !== this.state.attributes) {
      this.setState({ attributes: this.props.attributes })
    }
  }
  
  render() {
    const { overlayStyle } = this.props; 
    return (
      <div 
        className={`
          ${css.attribute_selector} 
          ${overlayStyle ? css.attribute_selector_overlay : ""}
        `}
      >
        {this.state.attributes.map(attr => {
          const isSwatch = attr.type === "swatch";
          return (
            <div className={css.attribute} key={attr.id}>
              <div className={css.attribute_name_wrapper}>
                <h4>{attr.name}:</h4>
              </div>
              <AttributeOptions 
                isSwatch={isSwatch}
                isMini={this.props.type === "mini"}
                overlayStyle={overlayStyle} 
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