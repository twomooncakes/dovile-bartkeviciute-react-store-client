import { Component } from "react";
import css from "./styles/AttributeOptions.module.css";

class AttributeOptions extends Component {
  state = {  } 

  selectAttr = (name, value) => {
    this.props.selectionHandler(name, value);
  }
  
  render() {
    const { isSwatch, attr, selectedOption, displayOnly, isMini } = this.props; 
    return (
      <div className={isMini ? css.mini_options : css.attribute_options}>
        {attr.items.map(item => {
          let bgColor = {};
          console.log("********");
          console.log(selectedOption);
          console.log(item.value);
          console.log(selectedOption === item.value);
          if(isSwatch) bgColor.backgroundColor = `${item.value}`;
          return (
            <div 
              className={`
                ${css.attribute_option}
                ${selectedOption === item.value ? `${(isSwatch ? css.swatch_selected : css.option_selected)}`: ""} 
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