import {
  screen, render, fireEvent,
} from '@testing-library/react';
import React from 'react';
import QuantityControl from './QuantityControl';

describe('QuantityControl component', () => {
  let MOCK_ADD; let MOCK_QUANTITY; let
    MOCK_REMOVE;
  beforeEach(() => {
    MOCK_QUANTITY = 5;
    MOCK_ADD = jest.fn();
    MOCK_REMOVE = jest.fn();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should display count of items in basket', () => {
    render(<QuantityControl
      quantity={MOCK_QUANTITY}
      add={MOCK_ADD}
      remove={MOCK_REMOVE}
    />);
    screen.getByText('5 in Basket');
  });
  it('should display an add button', () => {
    render(<QuantityControl
      quantity={MOCK_QUANTITY}
      add={MOCK_ADD}
      remove={MOCK_REMOVE}
    />);
    const addElement = screen.getByText('+');
    expect(addElement.tagName).toBe('BUTTON');
  });
  it('should display a remove button', () => {
    render(<QuantityControl
      quantity={MOCK_QUANTITY}
      add={MOCK_ADD}
      remove={MOCK_REMOVE}
    />);
    const addElement = screen.getByText('-');
    expect(addElement.tagName).toBe('BUTTON');
  });
  it('should call add function on clicking + button', () => {
    render(<QuantityControl
      quantity={MOCK_QUANTITY}
      add={MOCK_ADD}
      remove={MOCK_REMOVE}
    />);
    const addElement = screen.getByText('+');
    fireEvent.click(addElement);
    expect(MOCK_ADD).toHaveBeenCalledTimes(1);
  });
  it('should call remove function on clicking - button', () => {
    render(<QuantityControl
      quantity={MOCK_QUANTITY}
      add={MOCK_ADD}
      remove={MOCK_REMOVE}
    />);
    const removeElement = screen.getByText('-');
    fireEvent.click(removeElement);
    expect(MOCK_REMOVE).toHaveBeenCalledTimes(1);
  });
  it('should match snapshot', () => {
    const { container } = render(<QuantityControl
      quantity={MOCK_QUANTITY}
      add={MOCK_ADD}
      remove={MOCK_REMOVE}
    />);
    expect(container).toMatchSnapshot();
  });
});
