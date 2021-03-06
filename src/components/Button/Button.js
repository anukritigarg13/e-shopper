import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({ link, buttonName }) => (
  <div>
    <Link to={link}><button type="button">{buttonName}</button></Link>
  </div>
);
Button.propTypes = {
  link: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
};
export default Button;
