import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';
import './ProductList.css';

const ProductList = ({
  products, add, remove, category,
}) => {
  const requiredCategoryProducts = products.filter((product) => product.category === category);
  const requiredProducts = requiredCategoryProducts.map((product) => (
    <Product
      key={product.id}
      itemName={product.itemName}
      imgSrc={product.imgSrc}
      imgAlt={product.imgAlt}
      companyName={product.companyName}
      unitPrice={product.unitPrice}
      unitQuantity={product.unitQuantity}
      itemCount={product.itemCount}
      add={() => add(product.id)}
      remove={() => remove(product.id)}
    />
  ));
  return (
    <div className="product-container">
      <div className="product-type">{category}</div>
      <div className="product-list">
        {requiredProducts}
      </div>
    </div>
  );
};
const productsShape = {
  id: PropTypes.number.isRequired,
  imgAlt: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  unitPrice: PropTypes.number.isRequired,
  unitQuantity: PropTypes.string.isRequired,
  itemCount: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};
ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape(productsShape)).isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};
export default ProductList;
