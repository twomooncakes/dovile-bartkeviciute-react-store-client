import React, { Component } from 'react';

const ShopContext = React.createContext();

export class ShopProvider extends Component {
  state = {
    currentCat: localStorage.getItem("currentCategory") || "all",
    currentCurrency: JSON.parse(localStorage.getItem("currentCurrency")) || { label: "USD", symbol: "$" },
    currentProductID: localStorage.getItem("currentProductID"),
    shoppingCart: [ 
      {
        brand: "Microsoft", 
        name: "Xbox Series S", 
        gallery: [
          "https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg"
        ], 
        attributes: [
          { 
            id: "Color", name: "Color", type: "swatch",
            items: { displayValue: "Green", value: "#44FF03", id: "Green" }
          },
          { 
            id: "Capacity", name: "Capacity", type: "text",
            items: { displayValue: "1T", value: "1T", id: "1T" }
          }
        ],
      }
    ]
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

  removeProductFromCart = (productID) => {
    console.log("removing product");
  }

  addToCart = (product) => {
    console.log("adding to cart");
    this.setState({ shoppingCart: [...this.state.shoppingCart, product] });
  }

  render() {
    const { children } = this.props;
    const { currentCat, currentCurrency, currentProductID, shoppingCart } = this.state;
    const { changeCurrentCat, changeCurrentCurrency, changeCurrentProductID, addToCart } = this;
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
          addToCart
        }}
      >
        {children}
      </ShopContext.Provider>
    )
  }

}

export default ShopContext;
