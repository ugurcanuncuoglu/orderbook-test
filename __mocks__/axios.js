import { jest } from '@jest/globals';

const mockData = {
  lastUpdateId: 123456789,
  asks: [
    ["85813.59", "0.05105"],
    ["85814.00", "0.02500"]
  ],
  bids: [
    ["85813.50", "0.04000"],
    ["85813.00", "0.03000"]
  ]
};

const axios = {
  get: jest.fn().mockResolvedValue({ data: mockData })
};

export default axios; 