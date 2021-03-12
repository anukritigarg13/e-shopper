/* eslint-disable react/jsx-props-no-spreading */
import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from './Home';

describe('Home component should', () => {
  afterEach(() => jest.clearAllMocks);
  const mockProps = {
    addItemHandler: jest.fn(),
    removeItemHandler: jest.fn(),
    categorisedProducts: {
      'MOCK CATEGORY 1': [{
        id: 1, name: 'MOCK 1', price: 10, itemCount: 2, count: 5, category: 'MOCK CATEGORY 1',
      }],
      'MOCK CATEGORY 2': [{
        id: 2, name: 'MOCK 1', price: 10, itemCount: 2, count: 5, category: 'MOCK CATEGORY 2s',
      }],
    },
  };
  it('should call two ProductList components', () => {
    render(<Home {...mockProps} />);
    screen.logTestingPlaygroundURL();
    const productListElement = screen.getAllByTestId('product-list');
    expect(productListElement.length).toBe(2);
  });
  it('should match the snapshot', () => {
    const { container } = render(<Home {...mockProps} />);
    expect(container).toMatchSnapshot();
  });
});
