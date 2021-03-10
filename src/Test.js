const allOrders = {
  data: [
    {
      items: [
        {
          id: 1,
          name: 'apple',
          price: 120,
          count: 1,
          category: 'Fruits & Vegatables',
        },
      ],
      id: 1,
      date: 1615122360481,
    },
    {
      items: [
        {
          id: 2,
          name: 'table cloth',
          price: 200,
          count: 1,
          category: 'Household Items',
        },
        {
          id: 9,
          name: 'broom',
          price: 250,
          count: 1,
          category: 'Household Items',
        },
      ],
      id: 2,
      date: 1615122649963,
    },
    {
      items: [
        {
          id: 1,
          name: 'apple',
          price: 120,
          count: 1,
          category: 'Fruits & Vegatables',
        },
        {
          id: 2,
          name: 'table cloth',
          price: 200,
          count: 1,
          category: 'Household Items',
        },
        {
          id: 9,
          name: 'broom',
          price: 250,
          count: 1,
          category: 'Household Items',
        },
        {
          id: 8,
          name: 'curd',
          price: 20,
          count: 2,
          category: 'Dairy & Eggs',
        },
      ],
      id: 3,
      date: 1615122664245,
    },
    {
      items: [
        {
          id: 4,
          name: 'duster',
          price: 80,
          count: 1,
          category: 'Household Items',
        },
        {
          id: 5,
          name: 'milk',
          price: 10,
          count: 2,
          category: 'Dairy & Eggs',
        },
        {
          id: 6,
          name: 'butter',
          price: 20,
          count: 2,
          category: 'Dairy & Eggs',
        },
      ],
      id: 4,
      date: 1615122763596,
    },
  ],
};
// console.log(allOrders.data);
const testResult = allOrders.data.reduce((accumulator, order) => {
//   console.log(order.items);
//   console.log('Hey');
  const categorisedOrderItems = order.items.reduce((acc, product) => {
    if (acc[product.category] === undefined) {
      acc[product.category] = [];
    }
    const newProduct = { ...product };
    newProduct.itemCount = 0;
    acc[product.category].push(newProduct);
    return acc;
  }, {});
  const newOrder = { ...order, items: categorisedOrderItems };
  return accumulator.concat(newOrder);
}, []);
console.log(testResult);
