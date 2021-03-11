import React, { useState } from 'react';
import './Checkout.scss';
import validator from 'validator';
import PropTypes from 'prop-types';
import axios from 'axios';

const Checkout = ({ products }) => {
  const [name, setName] = useState('');
  const [contactNo, setContactNo] = useState(undefined);
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [successMessage, setSuccessMessage] = useState(undefined);
  const onChangeHandler = (event, field) => {
    const newValue = event.target.value;
    if (field === 'contactNo' && newValue.length > 10) {
      return;
    }
    switch (field) {
      case ('name'):
        setName(newValue);
        break;
      case ('contactNo'):
        setContactNo(newValue);
        break;
      case ('address'):
        setAddress(newValue);
        break;
      case ('email'):
        setEmail(newValue);
        break;
      default:
    }
  };

  const onCheckoutHandler = async () => {
    if (!validator.isEmail(email)
     || name.length === 0 || address.length === 0 || !contactNo || contactNo.length < 10) {
      setErrorMessage('Please add valid details');
      setSuccessMessage(undefined);
      return;
    }
    const orderedProducts = Object.keys(products).reduce((accumulator, productCategory) => {
      const productsInCart = products[productCategory]
        .filter((product) => product.itemCount > 0).reduce((acc, product) => {
          const newCount = product.itemCount;
          const newProduct = { ...product, count: newCount };
          delete newProduct.itemCount;
          return acc.concat(newProduct);
        }, []);
      if (accumulator.items === undefined) {
        accumulator.items = [];
      }
      accumulator.items = accumulator.items.concat(productsInCart);
      return accumulator;
    }, {});
    await axios.post('/orders', orderedProducts);
    setSuccessMessage('Thankyou for shopping with us!');
    setErrorMessage(undefined);
  };
  let message = '';
  if (errorMessage) message = errorMessage;
  else if (successMessage) message = successMessage;
  return (

    <div className="checkout">
      <div className="form">
        <form>
          Name
          <input type="text" onChange={(event) => onChangeHandler(event, 'name')} value={name} />
          Address
          <input type="text" onChange={(event) => onChangeHandler(event, 'address')} value={address} />
          Contact Number
          <input type="number" onChange={(event) => onChangeHandler(event, 'contactNo')} value={contactNo} />
          E-mail
          <input type="text" onChange={(event) => onChangeHandler(event, 'email')} value={email} />
        </form>
      </div>
      <div>
        <button onClick={onCheckoutHandler} type="button">Submit</button>
      </div>
      <div className="checkout-message">
        <h2>{message}</h2>
      </div>

      <div />

    </div>

  );
};
const productsShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
});
Checkout.propTypes = {
  products: PropTypes.objectOf(PropTypes.arrayOf(productsShape)).isRequired,
};
export default Checkout;
