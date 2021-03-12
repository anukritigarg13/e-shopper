/* eslint-disable react/jsx-props-no-spreading */
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Button from './Button';

describe('Button component', () => {
  afterEach(() => jest.clearAllMocks);
  const mockProps = {
    link: '/mock',
    buttonName: 'Mock button',
  };
  it('should display button', () => {
    render(<BrowserRouter><Button {...mockProps} /></BrowserRouter>);
    const buttonElement = screen.getByText('Mock button');
    expect(buttonElement.tagName).toBe('BUTTON');
  });
  it('should link to /mock', () => {
    render(<BrowserRouter><Button {...mockProps} /></BrowserRouter>);
    const buttonElement = screen.getByText('Mock button');
    fireEvent.click(buttonElement);
    expect(document.location.href).toBe('http://localhost/mock');
  });
  it('should match snapshot', () => {
    const { container } = render(<BrowserRouter><Button {...mockProps} /></BrowserRouter>);
    expect(container).toMatchSnapshot();
  });
});
