import axios from "axios";
import { jest } from "@jest/globals";
import {
  fetchBinanceOrderBook,
  fetchBtcTurkOrderBook,
  calculateUsdtNeeded,
  compareExchanges,
} from "../orderbook.js";

// Mock data for Binance
const mockBinanceData = {
  lastUpdateId: 123456789,
  asks: [
    ["85813.59", "0.05105"],
    ["85814.00", "0.02500"],
    ["85820.00", "0.10000"],
  ],
  bids: [
    ["85813.50", "0.04000"],
    ["85813.00", "0.03000"],
  ],
};

// Mock data for BtcTurk
const mockBtcTurkData = {
  data: {
    timestamp: 1744709614207,
    asks: [
      ["85757", "0.02330"],
      ["85758", "0.02330"],
      ["85761", "0.01000"],
    ],
    bids: [
      ["85710", "0.00116"],
      ["85700", "0.00075"],
    ],
  },
  success: true,
  message: null,
  code: "SUCCESS",
};

// Mock axios responses
jest.spyOn(axios, "get").mockImplementation((url) => {
  if (url.includes("binance")) {
    return Promise.resolve({ data: mockBinanceData });
  } else if (url.includes("btcturk")) {
    return Promise.resolve({ data: mockBtcTurkData });
  }
  throw new Error(`Unhandled URL in mock: ${url}`);
});

test("compareExchanges returns correct comparison", async () => {
  const result = await compareExchanges(0.001);

  // Check structure
  expect(result).toHaveProperty("binance.price");
  expect(result).toHaveProperty("binance.usdtNeeded");
  expect(result).toHaveProperty("btcTurk.price");
  expect(result).toHaveProperty("btcTurk.usdtNeeded");
  expect(result).toHaveProperty("betterExchange");
  expect(result).toHaveProperty("priceDifferencePercent");

  // According to our mock data, BtcTurk should have the better price
  expect(result.betterExchange).toBe("BtcTurk");
  expect(result.priceDifferencePercent).toBe("0.07");
});
