import { Component } from "react";
import css from "./styles/Notification.module.css";

class Notification extends Component {
  render() { 
    const { type, message, display } = this.props;
    return (
      <div className={`${css.notification_wrapper} ${display ? "" : css.hidden}`}>
        <div className={css.notification}>
          <p className={css.notification_text}>{message}</p>
        </div>
      </div>
    );
  }
}
 
export default Notification;