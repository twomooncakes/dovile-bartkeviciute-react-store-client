import React, { Component } from 'react';

const ShopContext = React.createContext();

export class ShopProvider extends Component {
  state = {
    currentCat: localStorage.getItem("currentCategory") || "all",
    currentCurrency: JSON.parse(localStorage.getItem("currentCurrency")) || { label: "USD", symbol: "$" },
    currentProductID: localStorage.getItem("currentProductID"),
    shoppingCart: {
      cartInfo: { itemCount: 0, totalPrice: 0 },
      products: [ 
        { 
          brand: "Nike", 
          name: "Nike Air",
          gallery: [
            "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087", "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087", "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087"
          ], 
          attributes: [
            { 
              id: "Size", name: "Size", type: "text", 
              items: {displayValue: "40", value: "40", id: "40"}, 
            },  
            { 
              id: "Size", name: "Size", type: "text", 
              items: {displayValue: "41", value: "41", id: "41"}
            }
          ]
        },
      
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
    },
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

  addToCart = (product) => {
    console.log("adding to cart");
    // needs refactoring to fit object with array
    this.setState({ shoppingCart: [...this.state.shoppingCart, product ] });
  }

  render() {
    const { children } = this.props;
    const { currentCat, currentCurrency, currentProductID, shoppingCart } = this.state;
    const { changeCurrentCat, changeCurrentCurrency, changeCurrentProductID } = this;
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
        }}
      >
        {children}
      </ShopContext.Provider>
    )
  }

}

export default ShopContext;
