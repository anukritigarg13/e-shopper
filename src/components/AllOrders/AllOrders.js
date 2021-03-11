import React from 'react';
import PropTypes from 'prop-types';
import AllOrdersTable from '../AllOrdersTable/AllOrdersTable';
import './AllOrders.scss';

const AllOrders = ({ allOrders }) => {
  const orders = allOrders.map((order) => (
    <AllOrdersTable
      key={order.id}
      order={order.items}
      date={order.date}
      id={order.id}
      totalCost={order.totalCost}
      totalItems={order.totalItems}
    />
  ));
  return (
    <>
      <div className="orders-item-heading">
        All Orders
        {'('}
        {allOrders.length}
        {' Items)'}
      </div>
      <div className="all-orders-items-table">
        {orders}
      </div>
    </>
  );
};
const productsShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
});
const allOrdersShape = {
  items: PropTypes.objectOf(PropTypes.arrayOf(productsShape)).isRequired,
  date: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  totalCost: PropTypes.number.isRequired,
};
AllOrders.propTypes = {
  allOrders: PropTypes.arrayOf(PropTypes.shape(allOrdersShape)).isRequired,
};
export default AllOrders;
