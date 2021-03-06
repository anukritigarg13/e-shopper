import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Navigation from './components/Navigation/Navigation';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [{
        id: 1,
        itemName: 'Banana',
        companyName: 'Fresco',
        imgSrc: 'assets/images/banana.jpeg',
        imgAlt: 'Image of banana',
        unitPrice: 20,
        unitQuantity: '1 Kg',
        itemCount: 0,
      }, {
        id: 2,
        itemName: 'Apple',
        companyName: 'Fresco',
        imgSrc: 'assets/images/apple.jpg',
        imgAlt: 'Image of apple',
        unitPrice: 30,
        unitQuantity: '1 Kg',
        itemCount: 0,
      }, {
        id: 3,
        itemName: 'Pineapple',
        companyName: 'Fresco',
        imgSrc: 'assets/images/pineapple.jpg',
        imgAlt: 'Image of pineapple',
        unitPrice: 60,
        unitQuantity: '1 Kg',
        itemCount: 0,
      }, {
        id: 4,
        itemName: 'Grapes',
        companyName: 'Fresco',
        imgSrc: 'assets/images/grapes.jpeg',
        imgAlt: 'Image of pineapple',
        unitPrice: 40,
        unitQuantity: '1 Kg',
        itemCount: 0,
      }, {
        id: 5,
        itemName: 'Orange',
        companyName: 'Fresco',
        imgSrc: 'assets/images/orange.jpeg',
        imgAlt: 'Image of orange',
        unitPrice: 25,
        unitQuantity: '1 Kg',
        itemCount: 0,
      }],
      cartItemsCount: 0,
      cartItems: {},

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
    const newCountState = {
      ...newProductState,
      cartItemsCount: newProductState.products
        .reduce((cartTotal, product) => cartTotal + product.itemCount, 0),
    };
    const newState = {
      ...newCountState,
      cartItems: newCountState.products
        .reduce((acc, product) => ({ ...acc, [product.itemName]: product.itemCount }), {}),
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

    const newCountState = {
      ...newProductState,
      cartItemsCount: newProductState.products
        .reduce((cartTotal, product) => cartTotal + product.itemCount, 0),
    };
    const newState = {
      ...newCountState,
      cartItems: newCountState.products
        .reduce((acc, product) => ({ ...acc, [product.itemName]: product.itemCount }), {}),
    };
    this.setState(newState);
  }

  render() {
    const {
      cartItemsCount, cartItems, products, addItemHandler, removeItemHandler,
    } = this.state;
    return (

      <BrowserRouter>
        <Navigation cartItemsCount={cartItemsCount} />
        <Switch>
          <Route exact path="/">
            <p className="product-type">Fruits</p>
            <div className="product-container">
              <div className="product-list">
                <ProductList
                  products={products}
                  cartItems={cartItems}
                  add={addItemHandler}
                  remove={removeItemHandler}
                />
              </div>
            </div>

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

        </Switch>

      </BrowserRouter>

    );
  }
}

export default App;
