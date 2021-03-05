import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    symbols: [Symbol!]!
    symbol(symbol: String!): Symbol
    company(symbol: String!): Company
    historicalPrices(symbol: String!, range: String!): [HistoricalPrice]
    news(symbol: String!, last: Int!): [News]
    indicators(filter: String): [Indicator!]!
    fundamentals(symbol: String!): Fundamentals
    fundamentalsFilter(filter: String): [Fundamentals!]!
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
    marketCap: Float
    trailingPe: Float
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

  type Company {
    symbol: String # Ticker of the company
    companyName: String # Name of the company
    employees: Float # Number of employees
    exchange: String # Refers to Exchange using https://sandbox.iexapis.com/stable/ref-data/exchanges?token=Tsk_5efc4d35d48d43b096a4c4a36980dfbc
    industry: String # Refers to the industry the company belongs to
    website: String # Website of the company
    description: String # Description for the company
    CEO: String # Name of the CEO of the company
    securityName: String # Name of the security
    issueType: String # Refers to the common issue type of the stock.
    # ad - ADR
    # cs - Common Stock
    # cef - Closed End Fund
    # et - ETF
    # oef - Open Ended Fund
    # ps - Preferred Stock
    # rt - Right
    # struct - Structured Product
    # ut - Unit
    # wi - When Issued
    # wt - Warrant
    # empty - Other
    sector: String # Refers to the sector the company belongs to.
    primarySicCode: String # Primary SIC Code for the symbol (if available)
    tags: [String] # An array of Strings used to classify the company.
    address: String # Street address of the company if available
    address2: String # Street address of the company if available
    state: String # State of the company if available
    city: String # City of the company if available
    zip: String # Zip code of the company if available
    country: String # Country of the company if available
    phone: String # Phone number of the company if available
  }
`;
