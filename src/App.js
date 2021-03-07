import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import AllOrders from './components/AllOrders/AllOrders';
import { allOrdersData, productsData } from './resources/data';
import ProductCategory from './components/ProductCategory/ProductCategory';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: productsData,
      cartItemsCount: 0,
      allOrders: allOrdersData,
    };
  }

  removeItemHandler = (id) => {
    const { products } = this.state;
    const newProductState = {
      ...this.state,
      products: products.map((product) => {
        if (product.id === id) {
          if (product.itemCount === 0) {
            return product;
          }
          return {
            ...product,
            itemCount: product.itemCount - 1,
          };
        }

        return product;
      }),
    };
    const newState = {
      ...newProductState,
      cartItemsCount: newProductState.products
        .reduce((cartTotal, product) => cartTotal + product.itemCount, 0),
    };
    this.setState(newState);
  }

  addItemHandler = (id) => {
    const { products } = this.state;
    const newProductState = {
      ...this.state,
      products: products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            itemCount: product.itemCount + 1,
          };
        }

        return product;
      }),
    };

    const newState = {
      ...newProductState,
      cartItemsCount: newProductState.products
        .reduce((cartTotal, product) => cartTotal + product.itemCount, 0),
    };
    this.setState(newState);
  }

  render() {
    const {
      cartItemsCount, products, allOrders,
    } = this.state;
    return (

      <BrowserRouter>
        <Navigation cartItemsCount={cartItemsCount} />
        <Switch>
          <Route exact path="/">
            <ProductCategory
              category="Fruits and Vegetables"
              products={products}
              addItemHandler={this.addItemHandler}
              removeItemHandler={this.removeItemHandler}
            />
          </Route>
          <Route path="/cart">
            <Cart
              cartItemsCount={cartItemsCount}
              products={products}
            />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/allOrders">
            <AllOrders allOrders={allOrders} />
          </Route>

        </Switch>

      </BrowserRouter>

    );
  }
}

export default App;
