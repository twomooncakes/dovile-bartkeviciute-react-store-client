import { Component } from "react";
import css from "./styles/Button.module.css";

class Button extends Component {
  constructor(props) {
    super(props)
  }

  state = {  } 

  render() { 
    const { children, styling, bg, txtColor, clickFunc } = this.props;
    return (
      <button className={`btn ${css.button} ${bg ? bg : ""} ${txtColor ? txtColor : ""} ${styling}`} onClick={clickFunc}>
        {children}
      </button>
    );
  }
}
 
export default Button;