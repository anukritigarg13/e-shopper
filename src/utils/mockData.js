/* eslint-disable import/prefer-default-export */
export const mockOrders = {
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
    {
      items: [
        {
          id: 1,
          name: 'apple',
          price: 120,
          count: 3,
          category: 'Fruits & Vegatables',
        },
        {
          id: 3,
          name: 'grapes',
          price: 50,
          count: 3,
          category: 'Fruits & Vegatables',
        },
        {
          id: 7,
          name: 'banana',
          price: 5,
          count: 2,
          category: 'Fruits & Vegatables',
        },
      ],
      id: 5,
      date: 1615540977063,
    },
  ],
};

export const mockProducts = {
  data: [
    {
      id: 1,
      name: 'apple',
      price: 120,
      count: 20,
      category: 'Fruits & Vegatables',
    },
    {
      id: 2,
      name: 'table cloth',
      price: 200,
      count: 3,
      category: 'Household Items',
    },
    {
      id: 3,
      name: 'grapes',
      price: 50,
      count: 10,
      category: 'Fruits & Vegatables',
    },
    {
      id: 4,
      name: 'duster',
      price: 80,
      count: 5,
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
    {
      id: 7,
      name: 'banana',
      price: 5,
      count: 48,
      category: 'Fruits & Vegatables',
    },
    {
      id: 8,
      name: 'curd',
      price: 20,
      count: 4,
      category: 'Dairy & Eggs',
    },
    {
      id: 9,
      name: 'broom',
      price: 250,
      count: 4,
      category: 'Household Items',
    },
    {
      id: 10,
      name: 'soap',
      price: 10,
      count: 0,
      category: 'Household Items',
    },
  ],
};

export const categorisedProducts = {
  'Fruits & Vegatables': [
    {
      id: 1,
      name: 'apple',
      price: 120,
      count: 20,
      category: 'Fruits & Vegatables',
      itemCount: 0,
    },
    {
      id: 3,
      name: 'grapes',
      price: 50,
      count: 10,
      category: 'Fruits & Vegatables',
      itemCount: 0,
    },
    {
      id: 7,
      name: 'banana',
      price: 5,
      count: 48,
      category: 'Fruits & Vegatables',
      itemCount: 0,
    },
  ],
  'Household Items': [
    {
      id: 2,
      name: 'table cloth',
      price: 200,
      count: 3,
      category: 'Household Items',
      itemCount: 0,
    },
    {
      id: 4,
      name: 'duster',
      price: 80,
      count: 5,
      category: 'Household Items',
      itemCount: 0,
    },
    {
      id: 9,
      name: 'broom',
      price: 250,
      count: 4,
      category: 'Household Items',
      itemCount: 0,
    },
    {
      id: 10,
      name: 'soap',
      price: 10,
      count: 0,
      category: 'Household Items',
      itemCount: 0,
    },
  ],
  'Dairy & Eggs': [
    {
      id: 5,
      name: 'milk',
      price: 10,
      count: 2,
      category: 'Dairy & Eggs',
      itemCount: 0,
    },
    {
      id: 6,
      name: 'butter',
      price: 20,
      count: 2,
      category: 'Dairy & Eggs',
      itemCount: 0,
    },
    {
      id: 8,
      name: 'curd',
      price: 20,
      count: 4,
      category: 'Dairy & Eggs',
      itemCount: 0,
    },
  ],
};

export const categorisedOrders = [
  {
    items: {
      'Fruits & Vegatables': [
        {
          id: 1,
          name: 'apple',
          price: 120,
          count: 1,
          category: 'Fruits & Vegatables',
          itemCount: 0,
        },
      ],
    },
    id: 1,
    date: 1615122360481,
    totalItems: 1,
    totalCost: 120,
  },
  {
    items: {
      'Household Items': [
        {
          id: 2,
          name: 'table cloth',
          price: 200,
          count: 1,
          category: 'Household Items',
          itemCount: 0,
        },
        {
          id: 9,
          name: 'broom',
          price: 250,
          count: 1,
          category: 'Household Items',
          itemCount: 0,
        },
      ],
    },
    id: 2,
    date: 1615122649963,
    totalItems: 2,
    totalCost: 450,
  },
  {
    items: {
      'Fruits & Vegatables': [
        {
          id: 1,
          name: 'apple',
          price: 120,
          count: 1,
          category: 'Fruits & Vegatables',
          itemCount: 0,
        },
      ],
      'Household Items': [
        {
          id: 2,
          name: 'table cloth',
          price: 200,
          count: 1,
          category: 'Household Items',
          itemCount: 0,
        },
        {
          id: 9,
          name: 'broom',
          price: 250,
          count: 1,
          category: 'Household Items',
          itemCount: 0,
        },
      ],
      'Dairy & Eggs': [
        {
          id: 8,
          name: 'curd',
          price: 20,
          count: 2,
          category: 'Dairy & Eggs',
          itemCount: 0,
        },
      ],
    },
    id: 3,
    date: 1615122664245,
    totalItems: 4,
    totalCost: 610,
  },
  {
    items: {
      'Household Items': [
        {
          id: 4,
          name: 'duster',
          price: 80,
          count: 1,
          category: 'Household Items',
          itemCount: 0,
        },
      ],
      'Dairy & Eggs': [
        {
          id: 5,
          name: 'milk',
          price: 10,
          count: 2,
          category: 'Dairy & Eggs',
          itemCount: 0,
        },
        {
          id: 6,
          name: 'butter',
          price: 20,
          count: 2,
          category: 'Dairy & Eggs',
          itemCount: 0,
        },
      ],
    },
    id: 4,
    date: 1615122763596,
    totalItems: 3,
    totalCost: 140,
  },
  {
    items: {
      'Fruits & Vegatables': [
        {
          id: 1,
          name: 'apple',
          price: 120,
          count: 3,
          category: 'Fruits & Vegatables',
          itemCount: 0,
        },
        {
          id: 3,
          name: 'grapes',
          price: 50,
          count: 3,
          category: 'Fruits & Vegatables',
          itemCount: 0,
        },
        {
          id: 7,
          name: 'banana',
          price: 5,
          count: 2,
          category: 'Fruits & Vegatables',
          itemCount: 0,
        },
      ],
    },
    id: 5,
    date: 1615540977063,
    totalItems: 3,
    totalCost: 520,
  },
];
