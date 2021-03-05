import React from 'react';
import './Checkout.css';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        name: '',
        contactNo: null,
        email: null,
        address: null,
      },

    };
  }

  onChangeHandler = (event, field) => {
    const newValue = event.target.value;
    const newState = { ...this.state, data: { ...this.state.data, [field]: newValue } };
    this.setState(newState);
  }

  render() {
    console.log(this.state.data);
    return (
      <form>
        Name :
        <input type="text" onChange={(event) => this.onChangeHandler(event, 'name')} />
        Address:
        <input type="text" onChange={(event) => this.onChangeHandler(event, 'address')} />
        Contact Number:
        <input type="number" onChange={(event) => this.onChangeHandler(event, 'contactNo')} />
        E-mail
        <input type="text" onChange={(event) => this.onChangeHandler(event, 'email')} />
      </form>
    );
  }
}

export default Checkout;
