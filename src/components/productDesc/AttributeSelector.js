import { Component } from "react";
import css from "./styles/AttributeSelector.module.css";

class AttributeSelector extends Component {
  state = { attributes: this.props.attributes }
  
  selectAttr = (name, value) => {
    this.props.selectionHandler(name, value);
  }

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
            </div>
          )
        })}
      </div>
    );
  }
}
 
export default AttributeSelector;