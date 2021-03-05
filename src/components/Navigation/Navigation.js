import React from 'react';
import PropTypes from 'prop-types';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = (props) => (
  <div className="navigation">

    <Link to="/"><span className="navigation-links">E-Shopper</span></Link>
    <Link to="/cart">
      <span className="navigation-links">
        My Basket :
        {props.cartItemsCount}
      </span>

    </Link>

  </div>
);

Navigation.propTypes = {
  cartItemsCount: PropTypes.number.isRequired,
};

export default Navigation;
