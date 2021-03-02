export const mongoDbFieldMap = {
  symbol: (fundamentals) => fundamentals.symbol,
  marketCap: (fundamentals) =>
    validateNumberField(fundamentals.quote_table?.marketCap),
  trailingPE: (fundamentals) =>
    validateNumberField(fundamentals.stats?.trailingPE),
};

const validateNumberField = (value: any) => {
  if (isNaN(value)) {
    return null;
  }
  return value;
};
