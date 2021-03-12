import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import AllOrders from './components/AllOrders/AllOrders';
import NavContext from './components/styles/theme';
import Home from './components/Home/Home';
import { getAllItems, getAllOrders } from './utils/api';
import groupByCategory from './utils/helper';

const App = () => {
  const [products, setProducts] = useState({});
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [allOrders, setOrders] = useState([]);
  const [theme, setTheme] = useState('light');
  const [isLoaded, setLoaded] = useState('false');
  const [error, setError] = useState(null);

  useEffect(async () => {
    try {
      const categorisedProducts = await getAllItems('/items');
      setProducts(categorisedProducts);
      setLoaded(true);
    } catch (e) {
      setError(e);
    }
  }, []);

  useEffect(async () => {
    try {
      const categorisedOrders = await getAllOrders('./orders');
      setOrders(categorisedOrders);
      setLoaded(true);
    } catch (e) {
      setError(e);
    }
  }, []);

  const updateAllOrders = (order) => {
    const categorisedOrderItems = groupByCategory(order.data.items);
    const totalCost = order.data.items
      .reduce((acc, product) => acc + product.count * product.price, 0);
    const categorisedOrder = {};
    categorisedOrder.items = categorisedOrderItems;
    categorisedOrder.date = order.data.date;
    categorisedOrder.id = order.data.id;
    categorisedOrder.totalCost = totalCost;
    categorisedOrder.totalItems = order.data.items.length;
    const updatedAllOrders = [...allOrders];
    updatedAllOrders.push(categorisedOrder);
    setOrders(updatedAllOrders);
  };
  const removeItemHandler = (id, category) => {
    const newCategoryProducts = products[category].map((product) => {
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

    const newProducts = { ...products, [category]: newCategoryProducts };
    setProducts(newProducts);

    const newCartItemsCount = Object.keys(newProducts)
      .reduce((cartTotal, productCategory) => cartTotal + newProducts[productCategory]
        .reduce((cartSubTotal, product) => cartSubTotal + product.itemCount, 0), 0);
    setCartItemsCount(newCartItemsCount);
  };
  const toggleThemeHandler = () => {
    if (theme === 'light') {
      setTheme('dark');
      return;
    }
    setTheme('light');
  };
  const addItemHandler = (id, category) => {
    const newCategoryProducts = products[category].map((product) => {
      if (product.id === id) {
        if (product.itemCount === product.count) {
          return product;
        }
        return {
          ...product,
          itemCount: product.itemCount + 1,
        };
      }
      return product;
    });
    const newProducts = { ...products, [category]: newCategoryProducts };
    setProducts(newProducts);
    const newCartItemsCount = Object.keys(newProducts)
      .reduce((cartTotal, productCategory) => cartTotal + newProducts[productCategory]
        .reduce((cartSubTotal, product) => cartSubTotal + product.itemCount, 0), 0);
    setCartItemsCount(newCartItemsCount);
  };
  if (!isLoaded) {
    return <div>Your data is loading!</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <NavContext.Provider value={theme}>
        <Navigation cartItemsCount={cartItemsCount} toggleTheme={toggleThemeHandler} />
      </NavContext.Provider>

      <Switch>
        <Route exact path="/">
          <Home
            categorisedProducts={products}
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
          <Checkout
            products={products}
            updateAllOrders={updateAllOrders}
            cartItemsCount={cartItemsCount}
          />
        </Route>
        <Route path="/allOrders">
          <AllOrders allOrders={allOrders} />
        </Route>

      </Switch>

    </div>
  );
};

export default App;
