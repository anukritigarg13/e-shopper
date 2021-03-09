import React, { useState } from 'react';
import './Checkout.scss';
import validator from 'validator';

const Checkout = () => {
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

  const onCheckoutHandler = () => {
    if (!validator.isEmail(email)
     || name.length === 0 || address.length === 0 || !contactNo || contactNo.length < 10) {
      setErrorMessage('Please add valid details');
      setSuccessMessage(undefined);
      return;
    }
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

export default Checkout;
