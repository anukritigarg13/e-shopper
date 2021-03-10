import React from 'react';
import PropTypes from 'prop-types';
import './QuantityControl.css';

const QuantityControl = ({ add, remove, quantity }) => (
  <div className="quantity-control" data-testid="quantity-control">
    <p><button className="control-button" onClick={add} type="button">+</button></p>
    <p className="quantity-in-basket">
      {quantity}
      {' '}
      in Basket
    </p>
    <p><button className="control-button" onClick={remove} type="button">-</button></p>

  </div>
);

QuantityControl.propTypes = {
  quantity: PropTypes.number.isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default QuantityControl;
