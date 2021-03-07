const productsData = [{
  id: 1,
  itemName: 'Banana',
  companyName: 'Fresco',
  imgSrc: 'assets/images/banana.jpeg',
  imgAlt: 'Image of banana',
  unitPrice: 20,
  unitQuantity: '1 Kg',
  itemCount: 0,
  category: 'Fruits and Vegetables',
}, {
  id: 2,
  itemName: 'Apple',
  companyName: 'Fresco',
  imgSrc: 'assets/images/apple.jpg',
  imgAlt: 'Image of apple',
  unitPrice: 30,
  unitQuantity: '1 Kg',
  itemCount: 0,
  category: 'Fruits and Vegetables',
}, {
  id: 3,
  itemName: 'Pineapple',
  companyName: 'Fresco',
  imgSrc: 'assets/images/pineapple.jpg',
  imgAlt: 'Image of pineapple',
  unitPrice: 60,
  unitQuantity: '1 Kg',
  itemCount: 0,
  category: 'Fruits and Vegetables',
}, {
  id: 4,
  itemName: 'Grapes',
  companyName: 'Fresco',
  imgSrc: 'assets/images/grapes.jpeg',
  imgAlt: 'Image of pineapple',
  unitPrice: 40,
  unitQuantity: '1 Kg',
  itemCount: 0,
  category: 'Fruits and Vegetables',
}, {
  id: 5,
  itemName: 'Orange',
  companyName: 'Fresco',
  imgSrc: 'assets/images/orange.jpeg',
  imgAlt: 'Image of orange',
  unitPrice: 25,
  unitQuantity: '1 Kg',
  itemCount: 0,
  category: 'Fruits and Vegetables',
}, {
  id: 6,
  itemName: 'Dragonfruit',
  companyName: 'Fresco',
  imgSrc: 'assets/images/dragonfruit.jpg',
  imgAlt: 'Image of dragonfruit',
  unitPrice: 80,
  unitQuantity: '1 Kg',
  itemCount: 0,
  category: 'Fruits and Vegetables',
}];

const allOrdersData = [
  {
    orderId: 1,
    amount: 250,
    items: 10,
    date: 'Sun 04 Mar 2018',
    time: '10:01PM',
    orderDetails: [{
      id: 1,
      itemName: 'Banana',
      companyName: 'Fresco',
      imgSrc: 'assets/images/banana.jpeg',
      imgAlt: 'Image of banana',
      unitPrice: 20,
      unitQuantity: '1 Kg',
      itemCount: 5,
    }, {
      id: 2,
      itemName: 'Apple',
      companyName: 'Fresco',
      imgSrc: 'assets/images/apple.jpg',
      imgAlt: 'Image of apple',
      unitPrice: 30,
      unitQuantity: '1 Kg',
      itemCount: 5,
    }],
  },
  {
    orderId: 2,
    amount: 300,
    items: 10,
    date: 'Sun 04 Mar 2018',
    time: '10:01PM',
    orderDetails: [{
      id: 2,
      itemName: 'Apple',
      companyName: 'Fresco',
      imgSrc: 'assets/images/apple.jpg',
      imgAlt: 'Image of apple',
      unitPrice: 30,
      unitQuantity: '1 Kg',
      itemCount: 10,
    }],
  },
];

module.exports = {
  productsData,
  allOrdersData,
};