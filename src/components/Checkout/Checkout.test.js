/* eslint-disable react/jsx-props-no-spreading */
import { render, screen } from '@testing-library/react';
import React from 'react';
import { categorisedProducts } from '../../utils/mockData';
import Checkout from './Checkout';

describe('Checkout Component', () => {
  afterEach(() => jest.clearAllMocks);
  const mockProps = {
    products: categorisedProducts,
    cartItemsCount: 20,
    updateAllOrders: jest.fn(),
  };
  it('should match the snapshot', () => {
    const { container } = render(<Checkout {...mockProps} />);
    expect(container).toMatchSnapshot();
  });
  it('should render form component', () => {
    render(<Checkout {...mockProps} />);
    const formElement = screen.getByTestId('form');
    expect(formElement.tagName).toBe('FORM');
  });
});
