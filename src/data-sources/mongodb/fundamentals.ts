import { MongoDataSource } from "apollo-datasource-mongodb";

export class Fundamentals extends MongoDataSource<any, any> {
  getFundamentals(query) {
    return this.collection.find(query);
  }

  getFundamental(symbol: string) {
    return this.collection.findOne({ symbol: symbol.toUpperCase() });
  }
}
