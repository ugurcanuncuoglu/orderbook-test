# Crypto Exchange Comparison Tool

A Node.js utility that compares BTC/USDT orderbooks between Binance and BtcTurk exchanges to determine which one offers a better rate for purchasing Bitcoin with USDT.

## Features

- Fetches real-time orderbook data from Binance and BtcTurk APIs
- Calculates how much USDT needed to buy a specified amount of BTC by analyzing the lowest ask prices from both exchanges
- Compares the results and identifies the better exchange
- Detects potential arbitrage opportunities

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd orderbook-test

# Install dependencies
npm install
```

## Usage

### Running the Comparison

```bash
npm start
```

### Running Tests

```bash
npm test
```

## How It Works

The tool follows these steps:

1. Fetches the orderbook data from both Binance and BtcTurk APIs
2. Calculates how much BTC can be purchased with the specified USDT amount on each exchange
3. Compares the results to determine which exchange offers a better rate
4. Calculates the percentage difference and identifies potential arbitrage opportunities

## API Endpoints

- Binance
- BtcTurk

## Sample Output

```
For 2 BTC:
Binance: 171202.02 USDT (85601.01 USDT/BTC)
BtcTurk: 171246.00 USDT (85623 USDT/BTC)
Better price: Binance by 0.03%
```

