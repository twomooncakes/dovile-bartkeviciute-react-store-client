import { Component } from "react";
import css from "./styles/CurrencySwitcher.module.css";
import Chevron from "../../assets/ui-icons/chevron.svg";
import { queryFetch } from "../../utils/helpers";

const currenciesQuery = `
  {
    currencies {
      label
      symbol
    }
  }
`;

class CurrencySwitch extends Component {
  state = { chevronToggled: false, currencies: [], currentCurrency: "USD" } 

  async componentDidMount() {
    const currencyData = await queryFetch(currenciesQuery);
    this.setState({ currencies: currencyData.data.currencies }); 
  }

  toggleChevron = () => {
    this.setState({ chevronToggled: !this.state.chevronToggled });
  }


  render() { 
    return (
      <div className={css.nav_currency} onClick={this.toggleChevron}>
        {/* placeholder */}
        <p>$</p>
        <img className={this.state.chevronToggled ? "flip-x" : ""} src={Chevron} alt="vertical chevron for currency switcher" />
      </div>
    );
  }
}
 
export default CurrencySwitch;