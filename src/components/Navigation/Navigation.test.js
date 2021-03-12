/* eslint-disable react/jsx-props-no-spreading */
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';

describe('Navigation component', () => {
  afterEach(() => jest.clearAllMocks);
  const mockProps = {
    cartItemsCount: 10,
    toggleTheme: jest.fn(),
  };
  it('should display Change Theme button', () => {
    render(<BrowserRouter><Navigation {...mockProps} /></BrowserRouter>);
    const themeToggleElement = screen.getByText('Change Theme');
    expect(themeToggleElement.tagName).toBe('BUTTON');
  });
  it('should display E-Shopper nav link', () => {
    render(<BrowserRouter><Navigation {...mockProps} /></BrowserRouter>);
    const eShopperElement = screen.getByText('E-Shopper');
    expect(eShopperElement.tagName).toBe('A');
  });
  it('should display All Orders nav link', () => {
    render(<BrowserRouter><Navigation {...mockProps} /></BrowserRouter>);
    const eShopperElement = screen.getByText('All Orders');
    expect(eShopperElement.tagName).toBe('A');
  });
  it('should display My Basket nav link and show count of cart items as 10', () => {
    render(<BrowserRouter><Navigation {...mockProps} /></BrowserRouter>);
    const eShopperElement = screen.getByText('My Basket :10');
    expect(eShopperElement.tagName).toBe('A');
  });
  it('should go to /cart when My Basket clicked', () => {
    render(<BrowserRouter><Navigation {...mockProps} /></BrowserRouter>);
    const eShopperElement = screen.getByText('My Basket :10');
    fireEvent.click(eShopperElement);
    expect(document.location.href).toBe('http://localhost/cart');
  });
  it('should go to / when E-Shopper clicked', () => {
    render(<BrowserRouter><Navigation {...mockProps} /></BrowserRouter>);
    const eShopperElement = screen.getByText('E-Shopper');
    fireEvent.click(eShopperElement);
    expect(document.location.href).toBe('http://localhost/');
  });
  it('should go to /allOrders when All Orders clicked', () => {
    render(<BrowserRouter><Navigation {...mockProps} /></BrowserRouter>);
    const eShopperElement = screen.getByText('All Orders');
    fireEvent.click(eShopperElement);
    expect(document.location.href).toBe('http://localhost/allOrders');
  });
  it('should match snapshot', () => {
    const { container } = render(<BrowserRouter><Navigation {...mockProps} /></BrowserRouter>);
    expect(container).toMatchSnapshot();
  });
});
