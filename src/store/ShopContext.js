import React, { Component } from 'react';

const ShopContext = React.createContext();

export class ShopProvider extends Component {
  state = {
    currentCat: localStorage.getItem("currentCategory") || "all",
    currentCurrency: JSON.parse(localStorage.getItem("currentCurrency")) || { label: "USD", symbol: "$" },
    currentProductID: localStorage.getItem("currentProductID"),
    shoppingCart: []
  }

  changeCurrentCat = (newCat) => {
    console.log("changing category");
    this.setState({ currentCat: newCat });
    localStorage.setItem("currentCategory", newCat);
  }

  changeCurrentCurrency = (newCurrency) => {
    this.setState({ currentCurrency: newCurrency });
    localStorage.setItem("currentCurrency", JSON.stringify(newCurrency));
  }

  changeCurrentProductID = (newProductID) => {
    console.log("changing product");
    this.setState({ currentProductID: newProductID });
    localStorage.setItem("currentProductID", newProductID);
  }

  changeCartProductQuantity = (action, productID) => {
    console.log("product quantity");


    if(action === "increase") {
      this.setState({ shoppingCart: this.state.shoppingCart.map(product => product.id === productID ? { ...product, quantity: product.quantity + 1} : product) })
    }
    if(action === "decrease") {
      this.state.shoppingCart.map(product => {
        if(product.id === productID && product.quantity === 1) {
          console.log("it is one");
          this.setState({
            shoppingCart: this.state.shoppingCart.filter(item => item.id !== productID)
          });
        } else {
          this.setState({ shoppingCart: this.state.shoppingCart.map(product => product.id === productID ? { ...product, quantity: product.quantity - 1} : product) })
        }
      })
    }
  }

  addToCart = (product) => {
    console.log("adding to cart");
    this.setState({ shoppingCart: [...this.state.shoppingCart, product] });
  }

  render() {
    const { children } = this.props;
    const { currentCat, currentCurrency, currentProductID, shoppingCart } = this.state;
    const { changeCurrentCat, changeCurrentCurrency, changeCurrentProductID, changeCartProductQuantity, addToCart } = this;
    return (
      <ShopContext.Provider
        value={{
          currentCat,
          currentCurrency,
          currentProductID,
          shoppingCart,
          changeCurrentCat,
          changeCurrentCurrency,
          changeCurrentProductID,
          changeCartProductQuantity,
          addToCart
        }}
      >
        {children}
      </ShopContext.Provider>
    )
  }

}

export default ShopContext;
