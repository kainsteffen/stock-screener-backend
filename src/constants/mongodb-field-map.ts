export const mongoDbFieldMap = {
  symbol: (fundamentals) => fundamentals.symbol,
  name: (fundamentals) => fundamentals.name,
  fiftyTwoWeekRange: (fundamentals) => fundamentals.quote_table["52WeekRange"],
  forwardDividendYield: (fundamentals) =>
    fundamentals.quote_table.forwardDividendYield,
  marketCap: (fundamentals) =>
    validateNumberField(fundamentals.quote_table?.marketCap),
  trailingPe: (fundamentals) =>
    validateNumberField(fundamentals.stats?.trailingPE),
};

const validateNumberField = (value: any) => {
  if (isNaN(value)) {
    return null;
  }
  return value;
};
