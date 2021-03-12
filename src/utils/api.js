/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import groupByCategory from './helper';

export const getAllItems = async (endpoint) => {
  const { data, error } = await axios.get(endpoint);
  if (data) {
    return groupByCategory(data.data);
  }
  throw new Error(error.message);
};

export const getAllOrders = async (endpoint) => {
  const { data: orders, error } = await axios.get(endpoint);
  if (orders) {
    const categorisedOrders = orders.data.reduce((allOrders, order) => {
      const categorisedOrderItems = groupByCategory(order.items);
      const totalCost = order.items
        .reduce((acc, product) => acc + product.count * product.price, 0);
      const newOrder = {
        ...order, items: categorisedOrderItems, totalItems: order.items.length, totalCost,
      };
      return allOrders.concat(newOrder);
    }, []);
    return categorisedOrders;
  }
  throw new Error(error.message);
};

export const postOrder = async (endpoint, products) => {
  const orderedProducts = Object.keys(products).reduce((accumulator, productCategory) => {
    const productsInCart = products[productCategory]
      .filter((product) => product.itemCount > 0).reduce((acc, product) => {
        const newCount = product.itemCount;
        const newProduct = { ...product, count: newCount };
        delete newProduct.itemCount;
        return acc.concat(newProduct);
      }, []);
    if (accumulator.items === undefined) {
      accumulator.items = [];
    }
    accumulator.items = accumulator.items.concat(productsInCart);
    return accumulator;
  }, {});
  const response = await axios.post('/orders', orderedProducts);
  return response;
};
