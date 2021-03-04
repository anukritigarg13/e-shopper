import React from 'react';
import PropTypes from 'prop-types';
import QuantityControl from '../QuantityControl/QuantityControl';
import './Product.css';

const Product = (props) => (
  <div className="product">
    <div className="product-image-div">
      <img className="product-image" src={props.imgSrc} alt={props.imgAlt} />
    </div>

    <p>{props.companyName}</p>
    <p>{props.itemName}</p>
    <p>{props.unitQuantity}</p>
    <div className="quantity-placard">
      <p>
        MRP
        {' '}
        {props.unitPrice}
        /-
      </p>
      <QuantityControl
        add={props.add}
        remove={props.remove}
        quantity={props.itemCount}
      />
    </div>
  </div>
);

Product.propTypes = {
  imgAlt: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  unitPrice: PropTypes.number.isRequired,
  unitQuantity: PropTypes.string.isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  itemCount: PropTypes.number.isRequired,

};
export default Product;
