import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = (props) => (
  <div>
    <Link to={props.link}><button type="button">{props.buttonName}</button></Link>
  </div>
);
Button.propTypes = {
  link: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
};
export default Button;
