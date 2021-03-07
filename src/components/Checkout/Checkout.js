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
    }), () => console.log(this.state));
  }

  onCheckoutHandler = () => {
    const { data } = this.state;
    const { email } = data;
    if (!validator.isEmail(email)) {
      alert('Please enter a valid email');
    }
  }

  render() {
    const { data } = this.state;
    const {
      name, address, contactNo, email,
    } = data;
    return (
      <div>
        <form>
          Name :
          <input type="text" onChange={(event) => this.onChangeHandler(event, 'name')} value={name} />
          Address:
          <input type="text" onChange={(event) => this.onChangeHandler(event, 'address')} value={address} />
          Contact Number:
          <input type="number" onChange={(event) => this.onChangeHandler(event, 'contactNo')} value={contactNo} />
          E-mail
          <input type="text" onChange={(event) => this.onChangeHandler(event, 'email')} value={email} />
        </form>
        <button onClick={this.onCheckoutHandler} type="button">Submit</button>
      </div>

    );
  }
}

export default Checkout;
