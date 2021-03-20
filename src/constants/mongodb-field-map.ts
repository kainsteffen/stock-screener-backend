export const mongoDbFieldMap = {
  symbol: (fundamentals) => fundamentals.symbol,
  name: (fundamentals) => fundamentals.name,
  fiftyTwoWeekRange: (fundamentals) => fundamentals.quote_table["52WeekRange"],
  marketCap: (fundamentals) =>
    validateNumberField(fundamentals.quote_table?.marketCap),
  trailingPE: (fundamentals) =>
    validateNumberField(fundamentals.stats?.trailingPE),
  forwardPE: (fundamentals) =>
    validateNumberField(fundamentals.stats?.trailingPE),
  pegRatio: (fundamentals) => validateNumberField(fundamentals.stats?.pegRatio),
  priceToSales: (fundamentals) =>
    validateNumberField(fundamentals.stats?.priceToSales),
  priceToBook: (fundamentals) =>
    validateNumberField(fundamentals.stats?.priceToBook),
  eps: (fundamentals) => validateNumberField(fundamentals.quote_table?.eps),
  enterpriseValue: (fundamentals) =>
    validateNumberField(fundamentals.stats?.enterpriseValue),
  beta5YMonthly: (fundamentals) =>
    validateNumberField(fundamentals.stats?.beta5YMonthly),
  enterPriseValueToRevenue: (fundamentals) =>
    validateNumberField(fundamentals.stats?.enterPriseValueToRevenue),
  enterPriseValueToEbitda: (fundamentals) =>
    validateNumberField(fundamentals.stats?.enterPriseValueToEbitda),
  avgVol3Month: (fundamentals) =>
    validateNumberField(fundamentals.stats?.avgVol3Month),
  avgVol10Day: (fundamentals) =>
    validateNumberField(fundamentals.stats?.avgVol10Day),
  avgVolume: (fundamentals) =>
    validateNumberField(fundamentals.stats?.avgVolume),
  sharesOutstanding: (fundamentals) =>
    validateNumberField(fundamentals.stats?.sharesOutstanding),
  float: (fundamentals) => validateNumberField(fundamentals.stats?.float),
  percentageHeldbyInsiders: (fundamentals) =>
    validateNumberField(fundamentals.stats?.percentageHeldbyInsiders),
  percentageHeldByInstitutions: (fundamentals) =>
    validateNumberField(fundamentals.stats?.percentageHeldByInstitutions),
  sharesShort: (fundamentals) =>
    validateNumberField(fundamentals.stats?.sharesShort),
  shortRatio: (fundamentals) =>
    validateNumberField(fundamentals.stats?.shortRatio),
  shortPercentageOfFloat: (fundamentals) =>
    validateNumberField(fundamentals.stats?.shortPercentageOfFloat),
  shortPercentageOfSharesOutstanding: (fundamentals) =>
    validateNumberField(fundamentals.stats?.shortPercentageOfSharesOutstanding),
  forwardAnnualDividendRate: (fundamentals) =>
    validateNumberField(fundamentals.stats?.forwardAnnualDividendRate),
  forwardAnnualDividendYield: (fundamentals) =>
    validateNumberField(fundamentals.stats?.forwardAnnualDividendYield),
  trailingAnnualDividendRate: (fundamentals) =>
    validateNumberField(fundamentals.stats?.trailingAnnualDividendRate),
  trailingAnnualDividendYield: (fundamentals) =>
    validateNumberField(fundamentals.stats?.trailingAnnualDividendYield),
  fiveYearAverageDividendYield: (fundamentals) =>
    validateNumberField(fundamentals.stats["5YearAverageDividendYield"]),
  payOutRatio: (fundamentals) =>
    validateNumberField(fundamentals.stats?.payOutRatio),
  profitMargin: (fundamentals) =>
    validateNumberField(fundamentals.stats?.profitMargin),
  operatingMargin: (fundamentals) =>
    validateNumberField(fundamentals.stats?.operatingMargin),
  returnOnAssets: (fundamentals) =>
    validateNumberField(fundamentals.stats?.returnOnAssets),
  returnOnEquity: (fundamentals) =>
    validateNumberField(fundamentals.stats?.returnOnEquity),
  revenue: (fundamentals) => validateNumberField(fundamentals.stats?.revenue),
  revenuePerShare: (fundamentals) =>
    validateNumberField(fundamentals.stats?.revenuePerShare),
  quarterlyRevenueGrowth: (fundamentals) =>
    validateNumberField(fundamentals.stats?.quarterlyRevenueGrowth),
  grossProfit: (fundamentals) =>
    validateNumberField(fundamentals.stats?.grossProfit),
  ebitda: (fundamentals) => validateNumberField(fundamentals.stats?.ebitda),
  netIncomeAviToCommon: (fundamentals) =>
    validateNumberField(fundamentals.stats?.netIncomeAviToCommon),
  dilutedEps: (fundamentals) =>
    validateNumberField(fundamentals.stats?.dilutedEps),
  quarterlyEarningsGrowth: (fundamentals) =>
    validateNumberField(fundamentals.stats?.quarterlyEarningsGrowth),
  totalCash: (fundamentals) =>
    validateNumberField(fundamentals.stats?.totalCash),
  totalCashPerShare: (fundamentals) =>
    validateNumberField(fundamentals.stats?.totalCashPerShare),
  totalDebt: (fundamentals) =>
    validateNumberField(fundamentals.stats?.totalDebt),
  totalDebtPerEquity: (fundamentals) =>
    validateNumberField(fundamentals.stats?.totalDebtPerEquity),
  currentRatio: (fundamentals) =>
    validateNumberField(fundamentals.stats?.currentRatio),
  bookValuePerShare: (fundamentals) =>
    validateNumberField(fundamentals.stats?.bookValuePerShare),
  operatingCashFlow: (fundamentals) =>
    validateNumberField(fundamentals.stats?.operatingCashFlow),
  leveredFreeCashFlow: (fundamentals) =>
    validateNumberField(fundamentals.stats?.leveredFreeCashFlow),
};

const validateNumberField = (value: any) => {
  if (isNaN(value)) {
    return null;
  }
  return value;
};
