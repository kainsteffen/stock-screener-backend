import { UserInputError } from "apollo-server-express";
import { parseResolveInfo } from "graphql-parse-resolve-info";
import { mongoDbFieldMap } from "./constants/mongodb-field-map";
import IexCloudApi from "./data-sources/iex-cloud-rest-api/iex-cloud";
import { Fundamentals } from "./data-sources/mongodb/fundamentals";
import { Indicators } from "./data-sources/mongodb/indicators";

export const resolvers = {
  Query: {
    symbols: async (_, __, { dataSources }) => {
      const result = (
        await (dataSources.iexCloudApi as IexCloudApi).getSymbols()
      ).filter(
        (symbol) =>
          (symbol.type === "ad" || symbol.type === "cs") &&
          (symbol.exchange === "NYS" || symbol.exchange === "NAS") &&
          symbol.region === "US"
      );
      return result;
    },
    company: async (_, { symbol }, { dataSources }) => {
      const result = await (dataSources.iexCloudApi as IexCloudApi).getCompany(
        symbol
      );
      return result;
    },
    historicalPrices: async (_, { symbol, range }, { dataSources }) => {
      switch (range) {
        case "1d":
          return await (dataSources.iexCloudApi as IexCloudApi).getHistoricalPrices(
            symbol,
            "1d",
            {
              chartInterval: 10,
              chartCloseOnly: true,
              displayPercent: true,
            }
          );

        case "5d":
          return await (dataSources.iexCloudApi as IexCloudApi).getHistoricalPrices(
            symbol,
            "5d",
            {
              chartCloseOnly: true,
              displayPercent: true,
            }
          );

        case "1m":
          return await (dataSources.iexCloudApi as IexCloudApi).getHistoricalPrices(
            symbol,
            "1m",
            {
              chartCloseOnly: true,
              displayPercent: true,
            }
          );

        case "1y":
          return await (dataSources.iexCloudApi as IexCloudApi).getHistoricalPrices(
            symbol,
            "1y",
            {
              chartCloseOnly: true,
              displayPercent: true,
            }
          );
      }

      return { symbol };
    },
    symbol: async (_, { symbol }, { dataSources }) => {
      return { symbol: symbol };
    },
    news: async (_, { symbol, last }, { dataSources }) => {
      const news = await (dataSources.iexCloudApi as IexCloudApi).getNews(
        symbol,
        last
      );
      return news;
    },
    logo: async (_, { symbol }, { dataSources }) => {
      const logo = await (dataSources.iexCloudApi as IexCloudApi).getLogo(
        symbol
      );
      return logo;
    },
    indicators: async (_, { filter }, { dataSources }) => {
      let parsedFilter;
      try {
        parsedFilter = JSON.parse(filter);
      } catch (e) {
        parsedFilter = {};
      }
      const result = await (dataSources.indicators as Indicators)
        .getIndicators(parsedFilter)
        .toArray();
      return result;
    },
    fundamentals: async (_, { symbol }, { dataSources }, info) => {
      const parsedInfo = parseResolveInfo(info);
      if (parsedInfo) {
        const fields = Object.keys(parsedInfo.fieldsByTypeName.Fundamentals);
        let result = {};
        for (let i = 0; i < fields.length; i++) {
          const field = fields[i];
          const fundamental = await (dataSources.fundamentals as Fundamentals).getFundamental(
            symbol
          );
          Object.assign(result, {
            [field]: mongoDbFieldMap[field](fundamental),
          });
        }
        return result;
      }
    },
    strategyResults: async (
      _,
      { filter, cursor, limit },
      { dataSources },
      info
    ) => {
      let parsedFilter;
      try {
        parsedFilter = JSON.parse(filter);
      } catch (e) {
        throw new UserInputError("Filter not JSON-parseable");
      }
      const mdbCursor = await (dataSources.fundamentals as Fundamentals)
        .getFundamentals(parsedFilter)
        .skip(cursor)
        .limit(limit);

      const fundamentals = await mdbCursor.toArray();
      const parsedInfo = parseResolveInfo(info);
      if (parsedInfo) {
        const fields = Object.keys(parsedInfo.fieldsByTypeName.Fundamentals);
        // Lift nested mongodb fields to top of object
        const mappedFundamentals = fundamentals.map((fundamental) => {
          let result = {};
          for (let i = 0; i < fields.length; i++) {
            const field = fields[i];
            Object.assign(result, {
              [field]: mongoDbFieldMap[field](fundamental),
            });
          }
          return result;
        });
        return mappedFundamentals;
      }
      return fundamentals;
    },
  },
  Mutation: {
    createStock: (_, {}) => {},
  },
  Symbol: {
    quote: async (parent, _, { dataSources }) => {
      const quote = await (dataSources.iexCloudApi as IexCloudApi).getQuote(
        parent.symbol
      );
      return quote;
    },
    logo: async (parent, _, { dataSources }) => {
      const logo = await (dataSources.iexCloudApi as IexCloudApi).getLogo(
        parent.symbol
      );
      return logo;
    },
    news: async (parent, { last }, { dataSources }) => {
      const news = await (dataSources.iexCloudApi as IexCloudApi).getNews(
        parent.symbol,
        last
      );
      return news;
    },
  },
};
