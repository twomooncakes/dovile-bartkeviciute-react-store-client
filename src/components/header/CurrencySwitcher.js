import { Component } from "react";
import css from "./styles/CurrencySwitcher.module.css";
import Chevron from "../../assets/ui-icons/chevron-dark.svg";
import { queryFetch } from "../../utils/helpers";
import ShopContext from "../../store/ShopContext";

const currenciesQuery = `
  {
    currencies {
      label
      symbol
    }
  }
`;

class CurrencySwitch extends Component {
  static contextType = ShopContext;
  state = { chevronToggled: false, currencies: [] } 

  async componentDidMount() {
    const currencyData = await queryFetch(currenciesQuery);
    this.setState({ currencies: currencyData.data.currencies }); 
  }

  toggleChevron = () => {
    this.setState({ chevronToggled: !this.state.chevronToggled });
  }

  render() { 
    const { chevronToggled, currencies } = this.state;
    const { currentCurrency } = this.context;
    return (
      <div className={css.nav_currency} onClick={this.toggleChevron}>
        <div 
          className={chevronToggled ? "app-overlay invisible" : ""}
          onClick={this.toggleChevron}
        ></div>
        <p>{currentCurrency.symbol}</p>
        <img 
          className={chevronToggled ? "flip-x" : ""} 
          src={Chevron} 
          alt="vertical chevron for currency switcher" 
        />
        {chevronToggled &&

        <ul className={css.currency_overlay_wrapper}>
          {currencies.map(currency => {
            return (
              <li 
                key={currency.label}
                onClick={() => this.context.changeCurrentCurrency({ 
                  label: currency.label,
                  symbol: currency.symbol 
                })} 
              >
                {currency.symbol} {currency.label}
              </li>
            )
          })}
        </ul>

        }
      </div>
    );
  }
}
 
export default CurrencySwitch;