import React from 'react';
import './Checkout.css';

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
      this.setState((prevState) => ({ data: { ...prevState }, error: 'Invalid Input' }));
    }
    this.setState((prevState) => ({
      ...prevState,
      data: { ...prevState.data, [field]: newValue },
    }), () => console.log(this.state));
  }

  render() {
    const { data } = this.state;
    const {
      name, address, contactNo, email,
    } = data;
    return (
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
    );
  }
}

export default Checkout;
