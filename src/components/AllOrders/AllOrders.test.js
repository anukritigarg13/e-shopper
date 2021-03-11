/* eslint-disable react/jsx-props-no-spreading */
import { render, screen } from '@testing-library/react';
import React from 'react';
import AllOrders from './AllOrders';

describe('AllOrders component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  let mockProps;
  beforeAll(() => {
    mockProps = {
      allOrders: [
        {
          items: {
            Fruits: [{
              id: 1, name: 'MOCK', price: 40, count: 5, category: 'Fruits',
            }],
          },
          date: 1615447258012,
          id: 1,
          totalItems: 1,
          totalCost: 340,
        }, {
          items: {
            Fruits: [{
              id: 1, name: 'MOCK', price: 40, count: 5, category: 'Fruits',
            }],
          },
          date: 1615447258012,
          id: 2,
          totalItems: 1,
          totalCost: 200,
        },
      ],
    };
  });
  it('should render two AllOrdersTable components', () => {
    render(<AllOrders {...mockProps} />);
    const orderTableElements = screen.getAllByTestId('orders-table-test');
    expect(orderTableElements.length).toBe(2);
  });
  it('should match snapshot', () => {
    const { container } = render(<AllOrders {...mockProps} />);
    expect(container).toMatchSnapshot();
  });
  it('should display the number of orders to be 2', () => {
    render(<AllOrders {...mockProps} />);
    screen.getByText('All Orders(2 Items)');
  });
});
