import axios from 'axios';
import { getAllItems, getAllOrders, postOrder } from '../api';
import {
  mockProducts, mockOrders, categorisedProducts, categorisedOrders,
} from '../mockData';

describe('getAllItems function', () => {
  afterEach(() => jest.clearAllMocks());
  const spyOnAxiosGet = jest.spyOn(axios, 'get');
  it('should get all items from api', async () => {
    spyOnAxiosGet.mockResolvedValue({ data: mockProducts });
    const receivedProducts = await getAllItems('MOCK ENDPOINT');
    expect(receivedProducts).toEqual(categorisedProducts);
  });
  it('should throw error if api return error', async () => {
    spyOnAxiosGet.mockResolvedValue({ error: { message: 'MOCK ERROR' } });
    try {
      await getAllItems('MOCK ENDPOINT');
    } catch (error) {
      expect(error.message).toBe('MOCK ERROR');
    }
  });
});
describe('getAllOrders function', () => {
  afterEach(() => jest.clearAllMocks());
  const spyOnAxiosGet = jest.spyOn(axios, 'get');
  it('should get all orders from api', async () => {
    spyOnAxiosGet.mockResolvedValue({ data: mockOrders });
    const receivedOrders = await getAllOrders('MOCK ENDPOINT');
    expect(receivedOrders).toEqual(categorisedOrders);
  });
  it('should throw error if api return error', async () => {
    spyOnAxiosGet.mockResolvedValue({ error: { message: 'MOCK ERROR' } });
    try {
      await getAllOrders('MOCK ENDPOINT');
    } catch (error) {
      expect(error.message).toBe('MOCK ERROR');
    }
  });
});
