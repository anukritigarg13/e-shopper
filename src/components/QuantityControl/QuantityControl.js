import React from 'react';
import PropTypes from 'prop-types';
import './QuantityControl.css';

const QuantityControl = ({ add, remove, quantity }) => (
  <div className="quantity-control">
    <button className="control-button" onClick={add} type="button">+</button>
    <p>
      {quantity}
      {' '}
      in Basket
    </p>
    <button className="control-button" onClick={remove} type="button">-</button>
  </div>
);

QuantityControl.propTypes = {
  quantity: PropTypes.number.isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default QuantityControl;
