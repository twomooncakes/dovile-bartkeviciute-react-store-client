import { Component } from "react";
import css from "./styles/AttributeOptions.module.css";

class AttributeOptions extends Component {
  state = {  } 

  selectAttr = (name, value) => {
    this.props.selectionHandler(name, value);
  }
  
  render() {
    const { isSwatch, attr } = this.props; 
    return (
      <div className={css.attribute_options}>
        {attr.items.map(item => {
          let bgColor = {};
          if(isSwatch) bgColor.backgroundColor = `${item.value}`;
          return (
            <div 
              className={`${css.attribute_option} ${isSwatch ? css.swatch : "" }`} 
              style={bgColor}
              key={item.id}
              onClick={() => this.selectAttr(attr.name, item.value)}
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