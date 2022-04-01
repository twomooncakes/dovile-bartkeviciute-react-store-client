export const backURL = process.env.REACT_APP_BACK_URL;

// universal fetch function with graphql queries
export async function queryFetch(dataQuery) {
  const response = await fetch(backURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: dataQuery })
    });
  const data = await response.json();
  // console.log("query data:");
  // console.log(data.data);
  return data;
}

// singular product price
export function getPrice(pricesArr, currentCurrency) {
  let price = 0;
  pricesArr.map(obj => obj.currency.label === currentCurrency.label ? price = obj.amount : "")
  return price.toFixed(2);
}

export function getTotalPrice(cartArr, currentCurrency) {
  let totalPrice = 0;
  cartArr.map(cartItem => totalPrice += getPrice(cartItem.prices, currentCurrency) * cartItem.quantity)
  return totalPrice.toFixed(2);
}

export function getTotalQuantity(cartArr) {
  let totalQuantity = 0;
  cartArr.map(cartItem => totalQuantity += cartItem.quantity)
  return totalQuantity;
}

// generate id from baseID and selected attributes
export function generateCartItemID(baseID, selectedAttrArr) {
  let id = baseID;
  selectedAttrArr.map(attr => id += `-${attr.value}`);
  return id.toLowerCase();
}

// returns cartItem for CartPage and MiniCart
export function generateCartItem(product, selectedAttributesArr) {
  return {
    id: generateCartItemID(product.id, selectedAttributesArr),
    name: product.name,
    brand: product.brand,
    prices: product.prices,
    attributes: product.attributes,
    selectedAttributes: selectedAttributesArr,
    gallery: product.gallery,
    url: product.id,
    quantity: 1,
  }
}

export function mod(n, m) {
  return ((n % m) + m) % m;
}
