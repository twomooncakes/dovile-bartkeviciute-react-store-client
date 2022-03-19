import React, { Component } from 'react';

const ShopContext = React.createContext();

export class ShopProvider extends Component {
  state = {
    currentCat: localStorage.getItem("currentCategory") || "all",
    currentCurrency: "USD",
    // currentProduct: {},
  }

  changeCurrentCat = (newCat) => {
    console.log("changing category");
    this.setState({ currentCat: newCat });
    localStorage.setItem("currentCategory", newCat);
  }

  changeCurrentCurrency = () => {

  }

  render() {
    const { children } = this.props;
    const { currentCat, currentCurrency } = this.state;
    const { changeCurrentCat, changeCurrentCurrency } = this;
    return (
      <ShopContext.Provider
        value={{
          currentCat,
          currentCurrency,
          changeCurrentCat,
          changeCurrentCurrency,
        }}
      >
        {children}
      </ShopContext.Provider>
    )
  }

}

export default ShopContext;
