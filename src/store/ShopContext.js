import React, { Component } from 'react';

const ShopContext = React.createContext();

export class ShopProvider extends Component {
  state = {
    currentCat: localStorage.getItem("currentCategory") || "all",
    currentCurrency: JSON.parse(localStorage.getItem("currentCurrency")) || { label: "USD", symbol: "$" },
    currentProductID: localStorage.getItem("currentProductID"),
  }

  changeCurrentCat = (newCat) => {
    console.log("changing category");
    this.setState({ currentCat: newCat });
    localStorage.setItem("currentCategory", newCat);
  }

  changeCurrentCurrency = (newCurrency) => {
    console.log("changing currency");
    this.setState({ currentCurrency: newCurrency });
    localStorage.setItem("currentCurrency", JSON.stringify(newCurrency));
  }

  changeCurrentProductID = (newProductID) => {
    console.log("changing product");
    this.setState({ currentProductID: newProductID });
    localStorage.setItem("currentProductID", newProductID);
  }

  render() {
    const { children } = this.props;
    const { currentCat, currentCurrency, currentProductID } = this.state;
    const { changeCurrentCat, changeCurrentCurrency, changeCurrentProductID } = this;
    return (
      <ShopContext.Provider
        value={{
          currentCat,
          currentCurrency,
          currentProductID,
          changeCurrentCat,
          changeCurrentCurrency,
          changeCurrentProductID,
        }}
      >
        {children}
      </ShopContext.Provider>
    )
  }

}

export default ShopContext;
