import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Navigation from './components/Navigation/Navigation';
// import Cart from './components/Cart/Cart';
// import Checkout from './components/Checkout/Checkout';
// import AllOrders from './components/AllOrders/AllOrders';
//  import { allOrdersData } from './resources/data';
// import ProductList from './components/ProductList/ProductList';
import NavContext from './theme';
import Home from './components/Home/Home';

const App = () => {
  const [products, setProducts] = useState({});
  const [cartItemsCount, setCartItemsCount] = useState(0);
  // const [allOrders] = useState(allOrdersData);
  const [theme, setTheme] = useState('light');
  const [isLoaded, setLoaded] = useState('false');
  const [error, setError] = useState(null);

  useEffect(async () => {
    try {
      const { data, axiosError } = await axios.get('/items');
      if (data) {
        const categorisedProducts = data.data.reduce((acc, product) => {
          if (acc[product.category] === undefined) {
            acc[product.category] = [];
          }
          const newProduct = { ...product };
          newProduct.itemCount = 0;
          acc[product.category].push(newProduct);
          return acc;
        }, {});
        setProducts(categorisedProducts);
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
    return <div>{error}</div>;
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
        {/* <Route path="/cart">
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
        </Route> */}

      </Switch>

    </div>
  );
};

export default App;
