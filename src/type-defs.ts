import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    symbols: [Symbol!]!
    symbol(symbol: String!): Symbol
    historicalPrices(symbol: String!, range: String!): [HistoricalPrice]
    news(symbol: String!, last: Int!): [News]
    indicators(filter: String): [Indicator!]!
    fundamentals(symbol: String!): Fundamentals
    find(filter: String): [Fundamentals!]!
  }

  type Mutation {
    createStock(name: String!): Symbol!
  }

  type Symbol {
    symbol: String
    exchange: String
    exchangeSuffix: String
    exchangeName: String
    name: String
    date: String
    type: String
    iexId: String
    region: String
    currency: String
    isEnabled: Boolean
    figi: String
    cik: String
    lei: String
    # -------------------
    logo: Logo
    news: News
    quote: Quote
    historicalPrices: [HistoricalPrice]
  }

  type Fundamentals {
    symbol: String
    marketCap: Float
    trailingPE: Float
  }

  type HistoricalPrice {
    date: String
    minute: String
    label: String
    high: Float
    low: Float
    average: Float
    volume: Float
    notional: Float
    numberOfTrades: Float
    marketHigh: Float
    marketLow: Float
    marketAverage: Float
    marketVolume: Float
    marketNotional: Float
    marketNumberOfTrades: Float
    open: Float
    close: Float
    marketOpen: Float
    marketClose: Float
    changeOverTime: Float
    marketChangeOverTime: Float
    changePercent: Float
    change: Float
  }

  type Quote {
    symbol: String
    companyName: String
    primaryExchange: String
    calculationPrice: String
    open: Float
    openTime: Float
    openSource: String
    close: Float
    closeTime: Float
    closeSource: String
    high: Float
    highTime: Float
    highSource: String
    low: Float
    lowTime: Float
    lowSource: String
    latestPrice: Float
    latestSource: String
    latestTime: String
    latestUpdate: Float
    latestVolume: Float
    iexRealtimePrice: Float
    iexRealtimeSize: Float
    iexLastUpdated: Float
    delayedPrice: Float
    delayedPriceTime: Float
    oddLotDelayedPrice: Float
    oddLotDelayedPriceTime: Float
    extendedPrice: Float
    extendedChange: Float
    extendedChangePercent: Float
    extendedPriceTime: Float
    previousClose: Float
    previousVolume: Float
    change: Float
    changePercent: Float
    volume: Float
    iexMarketPercent: Float
    iexVolume: Float
    avgTotalVolume: Float
    iexBidPrice: Float
    iexBidSize: Float
    iexAskPrice: Float
    iexAskSize: Float
    iexOpen: Float
    iexOpenTime: Float
    iexClose: Float
    iexCloseTime: Float
    marketCap: Float
    peRatio: Float
    week52High: Float
    week52Low: Float
    ytdChange: Float
    lastTradeTime: Float
    isUSMarketOpen: Boolean
  }

  type Logo {
    url: String
  }

  type News {
    datetime: Float
    headline: String
    source: String
    url: String
    summary: String
    related: String
    image: String
    lang: String
    hasPaywall: Boolean
  }

  type Indicator {
    key: String
    name: String
    type: String
    description: String
    investopediaUrl: String
  }
`;
