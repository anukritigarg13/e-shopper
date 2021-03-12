import {
  fireEvent, render, screen, waitFor, act,
} from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { getAllOrders, getAllItems } from './utils/api';
import {
  categorisedProducts, categorisedOrders,
} from './utils/mockData';

jest.mock('./utils/api');
describe('App component', () => {
  afterEach(() => {
    jest.clearAllMocks();
    getAllOrders.mockClear();
    getAllItems.mockClear();
  });
  beforeEach(() => {
    getAllOrders.mockResolvedValue(categorisedOrders);
    getAllOrders.mockClear();
    getAllItems.mockResolvedValue(categorisedProducts);
    getAllItems.mockClear();
  });
  it('should match snapshot', async () => {
    const { container } = await waitFor(() => render(<BrowserRouter><App /></BrowserRouter>));
    expect(container).toMatchSnapshot();
  });
  it('should render Home component', async () => {
    await waitFor(() => render(<BrowserRouter><App /></BrowserRouter>));
    const homeElement = screen.getAllByTestId('product-list');
    expect(homeElement.length).toBe(3); // 3 product lists: Fruits, Dairy, households
  });
  it('should render Navigation component', async () => {
    await waitFor(() => render(<BrowserRouter><App /></BrowserRouter>));
    screen.getByTestId('navigation');
  });
  it('should get products data from backend', async () => {
    await waitFor(() => render(<BrowserRouter><App /></BrowserRouter>));
    expect(getAllItems).toHaveBeenCalledTimes(1);
  });
  it('should get orders data from backend', async () => {
    await waitFor(() => render(<BrowserRouter><App /></BrowserRouter>));
    expect(getAllOrders).toHaveBeenCalledTimes(1);
  });
  it('should render All Orders page when All Orders clicked', async () => {
    await waitFor(() => render(<BrowserRouter><App /></BrowserRouter>));
    const allOrdersElement = screen.getByText('All Orders');
    fireEvent.click(allOrdersElement);
    screen.getByTestId('all-orders');
  });
  it('should render Home page when E-Shopper clicked', async () => {
    await waitFor(() => render(<BrowserRouter><App /></BrowserRouter>));
    const eShopperElement = screen.getByText('E-Shopper');
    fireEvent.click(eShopperElement);
    const homeElement = screen.getAllByTestId('product-list');
    expect(homeElement.length).toBe(3);
  });
  it('should render Cart page when My Basket:0 clicked', async () => {
    await waitFor(() => render(<BrowserRouter><App /></BrowserRouter>));
    const cartElement = screen.getByText('My Basket :0');
    fireEvent.click(cartElement);
    screen.getAllByTestId('cart');
  });
  it('should increment cart count by 1 when + button clicked', async () => {
    await waitFor(() => render(<BrowserRouter><App /></BrowserRouter>));
    const cartElement = screen.getAllByText('+');
    // console.log(cartElement[0]);
    // screen.logTestingPlaygroundURL();
    act(() => { fireEvent.click(cartElement[0]); });
    screen.getByText('My Basket :1');
  });
});
