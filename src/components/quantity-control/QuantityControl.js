/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const QuantityControl = (props) => (
  <div>
    <button onClick={props.add}>+</button>
    <p>
      {props.quantity}
      {' '}
      in Basket
    </p>
    <button onClick={props.remove}>-</button>
  </div>
);

QuantityControl.propTypes = {
  quantity: PropTypes.number.isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default QuantityControl;
