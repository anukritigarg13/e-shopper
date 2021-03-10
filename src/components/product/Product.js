import React from 'react';
import PropTypes from 'prop-types';
import QuantityControl from '../QuantityControl/QuantityControl';
import './Product.css';

const Product = ({
  imgSrc, imgAlt, companyName, itemName, itemCount, unitQuantity, unitPrice, add, remove,
}) => (
  <div className="product" data-testid="product-test">
    <div className="product-image-div">
      <img data-testid="product-img" className="product-image" src={imgSrc} alt={imgAlt} />
    </div>

    <p>{companyName}</p>
    <p>{itemName}</p>
    <p>{unitQuantity}</p>
    <div className="quantity-placard">
      <p>
        MRP
        {' '}
        {unitPrice}
        /-
      </p>
      <QuantityControl
        add={add}
        remove={remove}
        quantity={itemCount}
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
