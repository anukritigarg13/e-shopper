const groupByCategory = (items) => {
  const categorisedItems = items.reduce((acc, product) => {
    if (acc[product.category] === undefined) {
      acc[product.category] = [];
    }
    const newProduct = { ...product };
    newProduct.itemCount = 0;
    acc[product.category].push(newProduct);
    return acc;
  }, {});
  return categorisedItems;
};

export default groupByCategory;
