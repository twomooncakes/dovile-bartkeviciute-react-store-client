import { Component } from "react";
import css from "./styles/AttributeSelector.module.css";

class AttributeSelector extends Component {
  state = { attributes: this.props.attributes } 

  render() { 
    return (
      <div className={css.attribute_selector}>
        {this.state.attributes.map(attr => {
          return (
            <div className={css.attribute} key={attr.id}>
              <div className={css.attribute_name}>
                <h4>{attr.name}:</h4>
              </div>
              <div className={css.attribute_options}>
                {attr.items.map(item => {
                  return (
                    <div className={css.attribute_option} key={item.id}>
                      <p>{item.value}</p>
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