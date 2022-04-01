import { Component } from "react";
import css from "./styles/Button.module.css";

// primary or outline styles via type prop
class Button extends Component {
  render() { 
    const { children, styling, type, clickFunc, disabled } = this.props;
    return (
      <button 
        className={`
          btn 
          ${css.button} 
          ${type === "primary" ? css.accent_btn : css.outline_btn} 
          ${styling ? styling : ""}
        `} 
        onClick={clickFunc}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
}
 
export default Button;