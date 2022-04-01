import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Notification from './components/UI/Notification';
/* Pages */
import CartPage from './pages/CartPage';
import ProductDescPage from './pages/ProductDescPage';
import ProductListPage from './pages/ProductListPage';
/* Context */
import ShopContext from './store/ShopContext';

class App extends Component {
  render() {
    const { type, message, displayNotification } = this.context.notification;
    return (
      <div className="App">
        <Header />

        {
          <Notification display={displayNotification} type={type} message={message} />
        }

        <Switch>
          <Route path="/product/:id">
            <ProductDescPage />
          </Route>
          <Route exact path={"/"}>
            <ProductListPage />
          </Route>
          <Route exact path={"/" + this.context.currentCat}>
            <ProductListPage />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>

        </Switch>
      </div>
    );
  }
}

App.contextType = ShopContext;

export default App;
