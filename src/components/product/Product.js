import React from 'react';
import QuantityControl from '../quantity-control/QuantityControl';

class Product extends React.Children {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0,
    };
  }

  removeItemHandler() {
    if (this.state.itemCount === 0) {
      return;
    }
    this.setState((prevState) => ({
      itemCount: prevState.state.itemCount - 1,
    }));
  }

  addItemHandler() {
    if (this.state.itemCount === 0) {
      return;
    }
    this.setState((prevState) => ({
      itemCount: prevState.state.itemCount + 1,
    }));
  }

  render() {
    return (
      <div>
        <img src={this.props.ImgSrc} alt={this.props.ImgAlt} />
        <p>{this.props.companyName}</p>
        <p>{this.props.itemName}</p>
        <div>
          <p>{this.props.price}</p>
          <QuantityControl
            add={this.addItemHandler}
            remove={this.removeItemHandler}
            quantity={this.state.itemCount}
          />
        </div>

      </div>
    );
  }
}

export default Product;
