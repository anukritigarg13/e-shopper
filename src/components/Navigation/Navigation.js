import React from 'react';
import PropTypes from 'prop-types';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = ({ cartItemsCount }) => (
  <div className="navigation">
    <div><Link to="/" className="navigation-links">E-Shopper</Link></div>
    <div className="order-nav">
      <div><Link to="/allOrders" className="navigation-links">All Orders</Link></div>
      <div>
        <Link to="/cart" className="navigation-links">

          My Basket :
          {cartItemsCount}

        </Link>

      </div>
    </div>

  </div>
);

Navigation.propTypes = {
  cartItemsCount: PropTypes.number.isRequired,
};

export default Navigation;
