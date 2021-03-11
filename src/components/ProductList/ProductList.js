import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';
import './ProductList.css';

const ProductList = ({
  products, add, remove, category,
}) => {
  const requiredProducts = products.map((product) => (
    // <Product
    //   key={product.id}
    //   itemName={product.itemName}
    //   imgSrc={product.imgSrc}
    //   imgAlt={product.imgAlt}
    //   companyName={product.companyName}
    //   unitPrice={product.unitPrice}
    //   unitQuantity={product.unitQuantity}
    //   itemCount={product.itemCount}
    //   add={() => add(product.id)}
    //   remove={() => remove(product.id)}
    // />
    <Product
      key={product.id}
      itemName={product.name}
      imgSrc="assets/images/grapes.jpeg"
      imgAlt="image of grapes"
      companyName="Fresco"
      unitPrice={product.price}
      unitQuantity="1 kg"
      stock={product.count}
      itemCount={product.itemCount}
      add={() => add(product.id, product.category)}
      remove={() => remove(product.id, product.category)}
      category={product.category}
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
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};
ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape(productsShape)).isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};
export default ProductList;
