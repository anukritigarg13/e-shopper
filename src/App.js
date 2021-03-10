import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Navigation from './components/Navigation/Navigation';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import AllOrders from './components/AllOrders/AllOrders';
import { allOrdersData, productsData } from './resources/data';
import ProductList from './components/ProductList/ProductList';
import NavContext from './theme';

const App = () => {
  const [products, setProducts] = useState(productsData);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [allOrders] = useState(allOrdersData);
  const [theme, setTheme] = useState('light');
  const [isLoaded, setLoaded] = useState('false');
  const [error, setError] = useState(null);

  useEffect(async () => {
    try {
      const { data, axiosError } = await axios.get('/items');
      if (data) {
        setLoaded(true);
      }
      if (axiosError) {
        setError(axiosError);
        setLoaded(true);
      }
    } catch (e) {
      setError(e);
    }
  }, []);
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
  if (!isLoaded) {
    return <div>Your data is loading!</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <NavContext.Provider value={theme}>
        <Navigation cartItemsCount={cartItemsCount} toggleTheme={toggleThemeHandler} />
      </NavContext.Provider>

      <Switch>
        <Route exact path="/">
          <ProductList
            category="Fruits and Vegetables"
            products={products}
            add={addItemHandler}
            remove={removeItemHandler}
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

    </div>
  );
};

export default App;
