import { Component } from "react";
import css from "./styles/Button.module.css";

// primary or outline styles via type prop
class Button extends Component {
  render() { 
    const { children, styling, type, clickFunc } = this.props;
    return (
      <button 
        className={`
          btn 
          ${css.button} 
          ${type === "primary" ? css.accent_btn : css.outline_btn} 
          ${styling}
        `} 
        onClick={clickFunc}
      >
        {children}
      </button>
    );
  }
}
 
export default Button;