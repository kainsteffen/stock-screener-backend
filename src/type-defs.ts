import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    symbols: [Symbol!]!
    symbol(symbol: String!): Symbol
    company(symbol: String!): Company
    historicalPrices(symbol: String!, range: String!): [HistoricalPrice]
    news(symbol: String!, last: Int!): [News]
    logo(symbol: String!): Logo
    keyStats(symbol: String!): KeyStats
    indicators(filter: String): [Indicator!]!
    fundamentals(symbol: String!): Fundamentals
    strategyResults(filter: String, cursor: Int, limit: Int): [Fundamentals!]!
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
    name: String
    symbol: String
    fiftyTwoWeekRange: String
    forwardDividendYield: Float
    marketCap: Float
    trailingPE: Float
  }

  # https://iexcloud.io/docs/api/#key-stats
  type KeyStats {
    companyName: String
    marketcap: Float
    week52high: Float
    week52low: Float
    week52highSplitAdjustOnly: Float
    week52lowSplitAdjustOnly: Float
    week52change: Float
    sharesOutstanding: Float
    float: Float
    avg10Volume: Float
    avg30Volume: Float
    day200MovingAvg: Float
    day50MovingAvg: Float
    employees: Float
    ttmEPS: Float
    ttmDividendRate: Float
    dividendYield: Float
    nextDividendDate: String
    exDividendDate: String
    nextEarningsDate: String
    peRatio: Float
    beta: Float
    maxChangePercent: Float
    year5ChangePercent: Float
    year2ChangePercent: Float
    year1ChangePercent: Float
    ytdChangePercent: Float
    month6ChangePercent: Float
    month3ChangePercent: Float
    month1ChangePercent: Float
    day30ChangePercent: Float
    day5ChangePercent: Float
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
    valueType: String
  }

  # https://iexcloud.io/docs/api/#company
  type Company {
    symbol: String
    companyName: String
    employees: Float
    exchange: String
    industry: String
    website: String
    description: String
    CEO: String
    securityName: String
    issueType: String
    sector: String
    primarySicCode: String
    tags: [String]
    address: String
    address2: String
    state: String
    city: String
    zip: String
    country: String
    phone: String
  }
`;
