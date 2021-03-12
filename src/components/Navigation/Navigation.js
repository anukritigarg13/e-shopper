import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './Navigation.scss';
import { Link } from 'react-router-dom';
import NavContext from '../../theme';

const Navigation = ({ cartItemsCount, toggleTheme }) => {
  const currentTheme = useContext(NavContext);
  return (
    <div className={currentTheme === 'light' ? 'navigation' : 'navigation--dark-mode'} data-testid="navigation">
      <div><Link to="/" className={currentTheme === 'light' ? 'navigation-links' : 'navigation-links--dark-mode'}>E-Shopper</Link></div>
      <div>
        <button type="button" onClick={toggleTheme}> Change Theme</button>
      </div>
      <div className="order-nav">
        <div><Link to="/allOrders" className={currentTheme === 'light' ? 'navigation-links' : 'navigation-links--dark-mode'}>All Orders</Link></div>
        <div>
          <Link to="/cart" className={currentTheme === 'light' ? 'navigation-links' : 'navigation-links--dark-mode'}>

            My Basket :
            {cartItemsCount}

          </Link>

        </div>
      </div>

    </div>
  );
};

Navigation.propTypes = {
  cartItemsCount: PropTypes.number.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Navigation;
