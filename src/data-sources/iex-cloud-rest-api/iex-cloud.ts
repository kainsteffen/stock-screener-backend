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
    return this.get(`stock/${symbol}/logo`);
  }

  async getQuote(symbol: string) {
    return this.get(`stock/${symbol}/quote`, "", {
      cacheOptions: { ttl: durations.FIFTEEN_MINUTES_SECONDS },
    });
  }

  async getPriceOnly(symbol: string) {
    return this.get(`stock/${symbol}/price`);
  }

  async getIntraDayPrices(symbol: string) {
    return this.get(`stock/${symbol}/intraday-prices`);
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
    return this.get(`stock/${symbol}/chart/${range}`, params);
  }

  async getNews(symbol: string, last: number) {
    return this.get(`stock/${symbol}/news/last/${last}`);
  }

  async getUpcomingEarnings(symbol: string) {
    return this.get(`stock/${symbol}/upcoming-earnings`);
  }

  async getUpcomingDividends(symbol: string) {
    return this.get(`stock/${symbol}/upcoming-earnings`);
  }
}
