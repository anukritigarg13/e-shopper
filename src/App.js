import React from 'react';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import Navigation from './components/Navigation/Navigation';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [{
        id: 1,
        itemName: 'Banana',
        companyName: 'Fresco',
        imgSrc: 'assets/images/banana.jpg',
        imgAlt: 'Image of banana',
        unitPrice: 20,
        unitQuantity: '1 Kg',
        itemCount: 0,
      }, {
        id: 2,
        itemName: 'Apple',
        companyName: 'Fresco',
        imgSrc: 'assets/images/apple.png',
        imgAlt: 'Image of apple',
        unitPrice: 30,
        unitQuantity: '1 Kg',
        itemCount: 0,
      }, {
        id: 3,
        itemName: 'Pineapple',
        companyName: 'Fresco',
        imgSrc: 'assets/images/pineapple.png',
        imgAlt: 'Image of pineapple',
        unitPrice: 60,
        unitQuantity: '1 Kg',
        itemCount: 0,
      }, {
        id: 4,
        itemName: 'Grapes',
        companyName: 'Fresco',
        imgSrc: 'assets/images/grapes.jpg',
        imgAlt: 'Image of pineapple',
        unitPrice: 40,
        unitQuantity: '1 Kg',
        itemCount: 0,
      }],
      cartItems: 0,
    };
  }

  removeItemHandler = (id) => {
    const newProductState = {
      ...this.state,
      products: this.state.products.map((product) => {
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
      cartItems: newProductState.products
        .reduce((cartTotal, product) => cartTotal + product.itemCount, 0),
    };

    this.setState(newState);
  }

  addItemHandler = (id) => {
    const newProductState = {
      ...this.state,
      products: this.state.products.map((product) => {
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
      cartItems: newProductState.products
        .reduce((cartTotal, product) => cartTotal + product.itemCount, 0),
    };
    this.setState(newState);
  }

  render() {
    return (
      <>
        <Navigation cartItems={this.state.cartItems} />
        <p className="product-type">Fruits</p>
        <div className="product-list">
          <ProductList
            products={this.state.products}
            cartItems={this.state.cartItems}
            add={this.addItemHandler}
            remove={this.removeItemHandler}
          />
        </div>
      </>

    );
  }
}

// //function App() {
//
// }

export default App;
