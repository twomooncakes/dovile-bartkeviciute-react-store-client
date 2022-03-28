import { Component } from "react";
import css from "./styles/AttributeOptions.module.css";

class AttributeOptions extends Component {
  state = {  } 

  selectAttr = (name, value) => {
    this.props.selectionHandler(name, value);
  }
  
  render() {
    const { isSwatch, attr, displayOnly, isMini } = this.props; 
    return (
      <div className={isMini ? css.mini_options : css.attribute_options}>
        {attr.items.map(item => {
          let bgColor = {};
          if(isSwatch) bgColor.backgroundColor = `${item.value}`;
          return (
            <div 
              className={`
                ${css.attribute_option} 
                ${isSwatch ? css.swatch : "" }
                ${isMini ? css.mini_option : ""}
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