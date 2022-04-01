import React, { Component } from 'react';

const ShopContext = React.createContext();

export class ShopProvider extends Component {
  state = {
    currentCat: localStorage.getItem("currentCategory") || "all",
    currentCurrency: JSON.parse(localStorage.getItem("currentCurrency")) || { label: "USD", symbol: "$" },

    currentProductID: localStorage.getItem("currentProductID"),
    shoppingCart: JSON.parse(localStorage.getItem("shoppingCart")) || [],

    notification: { displayNotification: false }
  }

  changeCurrentCat = (newCat) => {
    this.setState({ currentCat: newCat });
    localStorage.setItem("currentCategory", newCat);
  }

  changeCurrentCurrency = (newCurrency) => {
    this.setState({ currentCurrency: newCurrency });
    localStorage.setItem("currentCurrency", JSON.stringify(newCurrency));
  }

  changeCurrentProductID = (newProductID) => {
    this.setState({ currentProductID: newProductID });
    localStorage.setItem("currentProductID", newProductID);
  }

  changeCartProductQuantity = (action, productID) => {
    if(action === "increase") {
      this.setState({ shoppingCart: this.state.shoppingCart.map(product => product.id === productID ? { ...product, quantity: product.quantity + 1} : product) })
    }
    if(action === "decrease") {
      this.setState({ shoppingCart: this.state.shoppingCart.map(product => product.id === productID ? { ...product, quantity: product.quantity - 1} : product) })
    }
  }

  removeCartItem = (productID) => {
    this.setState({
      shoppingCart: this.state.shoppingCart.filter(item => item.id !== productID)
    })
  }

  addToCart = (product) => {
    if(this.state.shoppingCart.find(item => item.id === product.id)) {
      this.setState({ shoppingCart: this.state.shoppingCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1} : item) })
    } else {
      this.setState({ shoppingCart: [...this.state.shoppingCart, product] });
    }
  }

  componentDidUpdate() {
    if(JSON.parse(localStorage.getItem("shoppingCart")) !== this.state.shoppingCart) {
      this.updateCartInStorage();
    }
  }

  updateCartInStorage = () => {
    localStorage.setItem("shoppingCart", JSON.stringify(this.state.shoppingCart));
  }

  showNotification = (type, message) => {
    this.setState({
      notification: {
        type: type,
        message: message,
        displayNotification: true,
      } 
    });
    
    setTimeout(() => {
      this.setState({ notification: {...this.state.notification, displayNotification: false } })
    }, 2000);
  }

  render() {
    const { children } = this.props;
    const { currentCat, currentCurrency, currentProductID, shoppingCart, notification } = this.state;
    const { changeCurrentCat, changeCurrentCurrency, changeCurrentProductID, changeCartProductQuantity, removeCartItem, addToCart, showNotification } = this;
    return (
      <ShopContext.Provider
        value={{
          currentCat,
          currentCurrency,
          currentProductID,
          shoppingCart,
          notification,
          changeCurrentCat,
          changeCurrentCurrency,
          changeCurrentProductID,
          changeCartProductQuantity,
          removeCartItem,
          addToCart,
          showNotification,
        }}
      >
        {children}
      </ShopContext.Provider>
    )
  }

}

export default ShopContext;
