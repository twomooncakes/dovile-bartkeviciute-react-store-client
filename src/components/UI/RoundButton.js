import { Component } from "react";
import css from "./styles/RoundButton.module.css";

class RoundButton extends Component {
  constructor(props) {
    super(props)
  }

  state = {  } 

  render() { 
    const { children } = this.props;
    return (
      <button className={`btn ${css.round_btn}`}>
        {children}
      </button>
    );
  }
}
 
export default RoundButton;