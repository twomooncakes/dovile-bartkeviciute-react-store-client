import React, { Component } from 'react';

const ShopContext = React.createContext();

export class ShopProvider extends Component {
  state = {
    currentCat: localStorage.getItem("currentCategory") || "all",
    currentCurrency: JSON.parse(localStorage.getItem("currentCurrency")) || { label: "USD", symbol: "$" },
    currentProductID: localStorage.getItem("currentProductID"),
    shoppingCart: JSON.parse(localStorage.getItem("shoppingCart")) || []
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
      this.setState({ shoppingCart: this.state.shoppingCart.map(product => product.id === productID ? { ...product, quantity: product.quantity - 1} : product) })
    }
    
  }

  removeCartItem = (productID) => {
    this.setState({
      shoppingCart: this.state.shoppingCart.filter(item => item.id !== productID)
    })
  }

  addToCart = (product) => {
    console.log("adding to cart");

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
    console.log("update local storage cart");
    localStorage.setItem("shoppingCart", JSON.stringify(this.state.shoppingCart));
  }

  render() {
    const { children } = this.props;
    const { currentCat, currentCurrency, currentProductID, shoppingCart } = this.state;
    const { changeCurrentCat, changeCurrentCurrency, changeCurrentProductID, changeCartProductQuantity, removeCartItem, addToCart } = this;
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
          removeCartItem,
          addToCart
        }}
      >
        {children}
      </ShopContext.Provider>
    )
  }

}

export default ShopContext;
