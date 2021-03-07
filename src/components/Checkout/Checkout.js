import React from 'react';
import './Checkout.css';
import validator from 'validator';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        name: '',
        contactNo: undefined,
        email: '',
        address: '',
      },
      error: null,

    };
  }

  onChangeHandler = (event, field) => {
    const newValue = event.target.value;
    if (field === 'contactNo' && newValue.length > 10) {
      this.setState((prevState) => ({ ...prevState }));
      return;
    }
    this.setState((prevState) => ({
      ...prevState,
      data: { ...prevState.data, [field]: newValue },
    }));
  }

  onCheckoutHandler = () => {
    const { data } = this.state;
    const {
      email, contactNo, name, address,
    } = data;
    if (!validator.isEmail(email)
     || name.length === 0 || address.length === 0 || !contactNo || contactNo.length < 10) {
      alert('Please enter valid details');
    }
  }

  render() {
    const { data } = this.state;
    const {
      name, address, contactNo, email,
    } = data;
    return (
      <div className="checkout">
        <div className="form">
          <form>
            Name
            <input type="text" onChange={(event) => this.onChangeHandler(event, 'name')} value={name} />
            Address
            <input type="text" onChange={(event) => this.onChangeHandler(event, 'address')} value={address} />
            Contact Number
            <input type="number" onChange={(event) => this.onChangeHandler(event, 'contactNo')} value={contactNo} />
            E-mail
            <input type="text" onChange={(event) => this.onChangeHandler(event, 'email')} value={email} />
          </form>
        </div>
        <div>
          <button onClick={this.onCheckoutHandler} type="button">Submit</button>
        </div>

      </div>

    );
  }
}

export default Checkout;
