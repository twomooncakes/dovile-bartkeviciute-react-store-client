import { Component } from "react";
import css from "./styles/AttributeOptions.module.css";

class AttributeOptions extends Component {
  state = { selectedAttr: null } 

  selectAttr = (name, value) => {
    this.setState({ selectedAttr: value })
    this.props.selectionHandler(name, value);
  }
  
  render() {
    const { isSwatch, attr, selectedOption, displayOnly, isMini, overlayStyle } = this.props;
    const { selectedAttr } = this.state; 
    return (
      <div className={`
        ${isMini ? css.mini_options : css.attribute_options}
        ${overlayStyle ? css.overlay_style : ""}
      `}
      >
        {attr.items.map(item => {
          let bgColor = {};
          if(isSwatch) bgColor.backgroundColor = `${item.value}`;
          return (
            <div 
              className={`
                ${css.attribute_option}
                ${selectedOption === item.value || selectedAttr === item.value ? `${(isSwatch ? css.swatch_selected : css.option_selected)}`: ""} 
                ${isSwatch ? css.swatch : "" }
                ${isMini ? `${css.mini_option} ${(isSwatch ? css.swatch_mini : "")}` : ""}
              `} 
              style={bgColor}
              key={item.id}
              onClick={displayOnly ? () => {} : () => this.selectAttr(attr.name, item.value)}
              >
              <p>{!isSwatch && item.value}</p>
            </div>
          )
        })}
      </div>
    );
  }
}
 
export default AttributeOptions;