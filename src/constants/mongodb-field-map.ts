export const mongoDbFieldMap = {
  symbol: (fundamentals) => fundamentals.symbol,
  name: (fundamentals) => fundamentals.name,
  fiftyTwoWeekRange: (fundamentals) => fundamentals.quote_table["52WeekRange"],
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
