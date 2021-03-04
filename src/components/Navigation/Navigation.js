import React from 'react';
import PropTypes from 'prop-types';
import './Navigation.css';

const Navigation = (props) => (
  <div className="navigation">

    <span>E-Shopper</span>
    <span>
      My Basket :
      {props.cartItemsCount}
    </span>

  </div>
);

Navigation.propTypes = {
  cartItemsCount: PropTypes.number.isRequired,
};

export default Navigation;
