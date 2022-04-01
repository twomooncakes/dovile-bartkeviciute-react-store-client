import { Component } from "react";
import css from "./styles/RoundButton.module.css";

class RoundButton extends Component {
  render() { 
    const { children, clickFunc } = this.props;
    return (
      <button onClick={clickFunc} className={`btn ${css.round_btn}`}>
        {children}
      </button>
    );
  }
}
 
export default RoundButton;