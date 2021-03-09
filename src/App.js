import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import AllOrders from './components/AllOrders/AllOrders';
import { allOrdersData, productsData } from './resources/data';
import ProductCategory from './components/ProductCategory/ProductCategory';
import NavContext from './theme';

const App = () => {
  const [products, setProducts] = useState(productsData);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [allOrders] = useState(allOrdersData);
  const [theme, setTheme] = useState('light');
  const removeItemHandler = (id) => {
    const newProducts = products.map((product) => {
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
    });
    setProducts(newProducts);
    const newCartItemsCount = newProducts
      .reduce((cartTotal, product) => cartTotal + product.itemCount, 0);
    setCartItemsCount(newCartItemsCount);
  };
  const toggleThemeHandler = () => {
    if (theme === 'light') {
      setTheme('dark');
      return;
    }
    setTheme('light');
  };
  const addItemHandler = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          itemCount: product.itemCount + 1,
        };
      }
      return product;
    });
    setProducts(newProducts);
    const newCartItemsCount = newProducts
      .reduce((cartTotal, product) => cartTotal + product.itemCount, 0);
    setCartItemsCount(newCartItemsCount);
  };

  return (

    <BrowserRouter>
      <NavContext.Provider value={theme}>
        <Navigation cartItemsCount={cartItemsCount} toggleTheme={toggleThemeHandler} />
      </NavContext.Provider>

      <Switch>
        <Route exact path="/">
          <ProductCategory
            category="Fruits and Vegetables"
            products={products}
            addItemHandler={addItemHandler}
            removeItemHandler={removeItemHandler}
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
};

export default App;
