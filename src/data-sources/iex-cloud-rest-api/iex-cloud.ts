import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";
import * as durations from "../../constants/durations";

export default class IexCloudApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.BASE_URL;
  }

  willSendRequest(request: RequestOptions) {
    request.params.set("token", process.env.API_TOKEN ?? "");
  }

  async getSymbols() {
    return this.get("ref-data/symbols", "", {
      cacheOptions: { ttl: durations.YEAR_IN_SECONDS },
    });
  }

  async getCompany(symbol: string) {
    return this.get(`stock/${symbol}/company`, "", {
      cacheOptions: { ttl: durations.YEAR_IN_SECONDS },
    });
  }

  async getLogo(symbol: string) {
    return this.get(`stock/${symbol}/logo`, "", {
      cacheOptions: { ttl: durations.YEAR_IN_SECONDS },
    });
  }

  async getKeyStats(symbol: string) {
    return this.get(`stock/${symbol}/stats`, "", {
      cacheOptions: { ttl: durations.MONTH_IN_SECONDS },
    });
  }

  async getReferenceData(fragment: string) {
    return this.get(`search/${fragment}`, "", {
      cacheOptions: { ttl: durations.YEAR_IN_SECONDS },
    });
  }

  async getQuote(symbol: string) {
    return this.get(`stock/${symbol}/quote`, "", {
      cacheOptions: { ttl: durations.FIFTEEN_MINUTES_SECONDS },
    });
  }

  async getPriceOnly(symbol: string) {
    return this.get(`stock/${symbol}/price`, "", {
      cacheOptions: { ttl: durations.FIFTEEN_MINUTES_SECONDS },
    });
  }

  async getIntraDayPrices(symbol: string) {
    return this.get(`stock/${symbol}/intraday-prices`, "", {
      cacheOptions: { ttl: durations.FIFTEEN_MINUTES_SECONDS },
    });
  }

  async getHistoricalPrices(
    symbol: string,
    range: string,
    params?: {
      chartCloseOnly?: Boolean;
      chartInterval?: Number;
      chartSimplify?: Boolean;
      displayPercent?: Boolean;
    }
  ) {
    return this.get(`stock/${symbol}/chart/${range}`, params, {
      cacheOptions: { ttl: durations.FIFTEEN_MINUTES_SECONDS },
    });
  }

  async getNews(symbol: string, last: number) {
    return this.get(`stock/${symbol}/news/last/${last}`, "", {
      cacheOptions: { ttl: durations.FIFTEEN_MINUTES_SECONDS },
    });
  }

  // Very expensive
  async getUpcomingEarnings(symbol: string) {
    return this.get(`stock/${symbol}/upcoming-earnings`, "", {
      cacheOptions: { ttl: durations.MONTH_IN_SECONDS },
    });
  }

  // Very expensive
  async getUpcomingDividends(symbol: string) {
    return this.get(`stock/${symbol}/upcoming-earnings`, "", {
      cacheOptions: { ttl: durations.MONTH_IN_SECONDS },
    });
  }
}
