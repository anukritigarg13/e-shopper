/* eslint-disable react/jsx-props-no-spreading */
import { render, screen } from '@testing-library/react';
import React from 'react';
import AllOrdersTable from './AllOrdersTable';

describe('AllOrdersTable component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  let mockProps;
  beforeAll(() => {
    mockProps = {
      order: {
        Fruits: [{
          id: 1, name: 'MOCK', price: 40, count: 5, category: 'Fruits',
        }],
      },
      date: 1615447258012,
      id: 1,
      totalItems: 1,
      totalCost: 340,
    };
  });
  it('should render one OrderDescriptionTable component', () => {
    render(<AllOrdersTable {...mockProps} />);
    const orderTableElements = screen.getAllByTestId('order-desc-table');
    expect(orderTableElements.length).toBe(1);
  });
  it('should match snapshot', () => {
    const { container } = render(<AllOrdersTable {...mockProps} />);
    expect(container).toMatchSnapshot();
  });
});
