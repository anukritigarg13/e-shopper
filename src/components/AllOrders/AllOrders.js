import React from 'react';
import PropTypes from 'prop-types';
import AllOrdersTable from '../AllOrdersTable/AllOrdersTable';
import './AllOrders.scss';

const AllOrders = ({ allOrders }) => {
  const orders = allOrders.map((order) => (
    <AllOrdersTable key={order.id} order={order} />

  ));
  return (
    <>
      <div className="orders-item-heading">
        All Orders
        {'('}
        {2}
        {' Items)'}
      </div>
      {orders}
    </>
  );
};
const allOrdersShape = {
  orderId: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  items: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,

};
AllOrders.propTypes = {
  allOrders: PropTypes.arrayOf(PropTypes.shape(allOrdersShape)).isRequired,
};
export default AllOrders;
