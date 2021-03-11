/* eslint-disable react/jsx-props-no-spreading */
import { render, screen } from '@testing-library/react';
import React from 'react';
import Product from './Product';

describe('Product component', () => {
  let mockProps;
  beforeAll(() => {
    mockProps = {
      imgSrc: 'MOCK_IMG_SRC',
      imgAlt: 'MOCK_IMG_ALT',
      companyName: 'MOCK_COMPANY_NAME',
      itemName: 'MOCK_ITEM_NAME',
      itemCount: 3,
      unitQuantity: '1 Kg',
      unitPrice: 40,
      stock: 50,
      add: jest.fn(),
      remove: jest.fn(),
    };
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should display product image', () => {
    render(<Product {...mockProps} />);
    const imgElement = screen.getByTestId('product-img');
    expect(imgElement.tagName).toBe('IMG');
  });
  it('should display the QuantityControl component', () => {
    render(<Product {...mockProps} />);
    screen.getByTestId('quantity-control');
  });
  it('should display company name, itemName and unitQuantity', () => {
    render(<Product {...mockProps} />);
    screen.getByText('MOCK_COMPANY_NAME');
    screen.getByText('MOCK_ITEM_NAME');
    screen.getByText('1 Kg');
  });
  it('should display unit price', () => {
    render(<Product {...mockProps} />);
    screen.getByText('MRP 40/-');
  });
  it('should match snapshot', () => {
    const { container } = render(<Product {...mockProps} />);
    expect(container).toMatchSnapshot();
  });
});
