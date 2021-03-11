/* eslint-disable react/jsx-props-no-spreading */
import { render, screen } from '@testing-library/react';
import React from 'react';
import ProductList from './ProductList';

describe('ProdcutList component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  let mockProps;
  beforeAll(() => {
    mockProps = {
      add: () => {},
      remove: () => {},
      category: 'Fruits',
      products: [{
        id: 1,
        name: 'MOCK_ITEM_NAME_1',
        itemCount: 3,
        count: 2,
        price: 40,
        add: () => {},
        remove: () => {},
        category: 'Fruits',
      }, {
        id: 2,
        name: 'MOCK_ITEM_NAME_2',
        itemCount: 3,
        count: 2,
        price: 40,
        add: () => {},
        remove: () => {},
        category: 'Fruits',
      }],
    };
  });
  it('should render two Product components', () => {
    render(<ProductList {...mockProps} />);
    const prodcutElements = screen.getAllByTestId('product-test');
    expect(prodcutElements.length).toBe(2);
  });
  it('should match snapshot', () => {
    const { container } = render(<ProductList {...mockProps} />);
    expect(container).toMatchSnapshot();
  });
});
